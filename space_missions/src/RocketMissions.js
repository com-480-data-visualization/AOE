import React, { useState, useEffect, useRef } from 'react';
import * as d3 from 'd3';
import Slider from 'react-slider';
import './RocketMissions.css';
import CustomSlider from './CustomSlider';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRocket } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
import styles from './MoonRace.module.css';


const RocketMissions = () => {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [companyData, setCompanyData] = useState([]);
  const [rocketData, setRocketData] = useState([]);
  const [view, setView] = useState('country');
  const [yearRange, setYearRange] = useState([1957, 2020]);
  const [hoverInfo, setHoverInfo] = useState({ label: 'Hover over a rocket to see details here.' });
  const [hierarchy, setHierarchy] = useState([]);
  const [title, setTitle] = useState('Country Level');
  const [history, setHistory] = useState([]);
  const svgRef = useRef();
  const navigate = useNavigate();
  const handleNavigate = (path) => {
    navigate(path);
    window.scrollTo(0, 0);
  };

  const formatNumber = (num) => {
    const formatter = new Intl.NumberFormat('en-US', {
      style: 'decimal',
      compactDisplay: 'short',
      maximumFractionDigits: 2,
    });
    return formatter.format(num);
  };

  useEffect(() => {
    fetch('./data/cleaned_missions_data.json')
      .then(response => response.json())
      .then(data => {
        console.log('Loaded Data:', data);
        setData(data);
        updateFilteredData(data, yearRange, view);
      })
      .catch(error => {
        console.error('Error loading data:', error);
      });
  }, []);

  useEffect(() => {
    updateFilteredData(data, yearRange, view);
    setTitle(renderTitle());
  }, [view, yearRange, hierarchy]);

  const groupByCountry = (data) => {
    const filteredData = data.filter(d => d['Year'] >= yearRange[0] && d['Year'] <= yearRange[1]);
    const grouped = Array.from(d3.group(filteredData, d => d['Country of Launch']));
    return grouped.map(([key, values]) => ({
      label: key,
      value: d3.sum(values, d => +d.Cost || 1),
      companies: Array.from(d3.rollup(values, v => d3.sum(v, d => +d.Cost || 1), d => d['Company Name'])).sort((a, b) => b[1] - a[1]).map(d => d[0]),
    })).filter(d => d.value > 0);
  };

  const groupByCompany = (data, country) => {
    const filteredData = country
      ? data.filter(d => d['Country of Launch'] === country && d['Year'] >= yearRange[0] && d['Year'] <= yearRange[1])
      : data.filter(d => d['Year'] >= yearRange[0] && d['Year'] <= yearRange[1]);
    const grouped = Array.from(d3.group(filteredData, d => d['Company Name']));
    return grouped.map(([key, values]) => {
      const years = values.map(v => v['Year']);
      return {
        label: key,
        value: d3.sum(values, d => +d.Cost || 1),
        type: values[0]['Private or State Run'],
        country: values[0]['Country of Launch'],
        yearRange: `${Math.min(...years)} - ${Math.max(...years) === 2020 ? 'Present' : Math.max(...years)}`
      };
    }).filter(d => d.value > 0);
  };

  const groupByRocket = (data, company, range) => {
    const filteredData = data.filter(d => d['Company Name'] === company && d['Year'] >= range[0] && d['Year'] <= range[1]);
    const grouped = Array.from(d3.group(filteredData, d => d['Rocket Name']));
    return grouped.map(([key, values]) => {
      const years = values.map(v => v['Year']);
      const successCount = values.filter(d => d['Status Mission'] === 'Success').length;
      const failureCount = values.filter(d => d['Status Mission'] !== 'Success').length;
      return {
        label: key,
        value: d3.sum(values, d => +d.Cost || 1),
        successProportion: successCount / (successCount + failureCount),
        totalMissions: successCount + failureCount,
        successCount: successCount,
        failureCount: failureCount,
        yearRange: `${Math.min(...years)} - ${Math.max(...years) === 2020 ? 'Present' : Math.max(...years)}`
      };
    }).filter(d => d.value > 0);
  };

  const handleBubbleClick = (d) => {
    if (view === 'country') {
      const groupedData = groupByCompany(data, d.label);
      setCompanyData(groupedData);
      setView('company');
      setHierarchy([d.label]);
    } else if (view === 'company') {
      const selectedCompany = companyData.find(company => company.label === d.label);
      if (selectedCompany) {
        const groupedData = groupByRocket(data, d.label, yearRange);
        setRocketData(groupedData);
        setView('rocket');
        setHierarchy([selectedCompany.country, d.label]);
      }
    } else if (view === 'allcompany') {
      const selectedCompany = companyData.find(company => company.label === d.label);
      if (selectedCompany) {
        const groupedData = groupByRocket(data, d.label, yearRange);
        setRocketData(groupedData);
        setView('rocket');
        setHierarchy([selectedCompany.country, d.label]);
        setHistory([{ view: 'allcompany', hierarchy: ['All'] }]);
      }
    }
  };

  const handleYearRangeChange = (newRange) => {
    setYearRange(newRange);
    updateFilteredData(data, newRange, view);
  };

  const handleBackClick = () => {
    if (view === 'rocket') {
      if (history.length > 0) {
        const lastState = history.pop();
        setView(lastState.view);
        setHierarchy(lastState.hierarchy);
        setHistory([]);
      } else {
        if (hierarchy[0] === 'All') {
          setView('allcompany');
          setHierarchy(['All']);
        } else {
          setView('company');
          setHierarchy(prevHierarchy => [prevHierarchy[0]]);
        }
      }
    } else if (view === 'company') {
      setView('country');
      setHierarchy([]);
    } else if (view === 'allcompany') {
      setView('country');
      setHierarchy([]);
    }
  };

  const updateFilteredData = (data, range, view) => {
    if (view === 'country') {
      setFilteredData(groupByCountry(data));
    } else if (view === 'company') {
      const currentCountry = hierarchy[0];
      if (currentCountry) {
        setCompanyData(groupByCompany(data, currentCountry));
      }
    } else if (view === 'allcompany') {
      setCompanyData(groupByCompany(data, ''));
    } else if (view === 'rocket') {
      const currentCompany = hierarchy[1];
      if (currentCompany) {
        setRocketData(groupByRocket(data, currentCompany, range));
      }
    }
  };

  const renderTitle = () => {
    if (view === 'country') {
      return 'Country Level';
    } else if (view === 'company') {
      return `Country: ${hierarchy[0] || 'All'}`;
    } else if (view === 'rocket') {
      return `Country: ${hierarchy[0]}; Company: ${hierarchy[1]}`;
    } else if (view === 'allcompany') {
      return 'Country: All';
    }
    return '';
  };

  const renderBubbles = (data, svg, width, height, className) => {
    if (data.length === 0) return;

    const minRadius = 25;

    const bubble = d3.pack()
        .size([width, height])
        .padding(43);

    const root = d3.hierarchy({ children: data })
        .sum(d => d.value)
        .sort((a, b) => b.value - a.value);

    bubble(root);

    const colorScale = d3.scaleOrdinal(d3.schemeCategory10);

    const defs = svg.append('defs');

    root.leaves().forEach((d, i) => {
        if (view === 'rocket') {
            const gradientId = `gradient-${i}`;
            const gradient = defs.append('linearGradient')
                .attr('id', gradientId)
                .attr('x1', '0%')
                .attr('x2', '100%')
                .attr('y1', '0%')
                .attr('y2', '0%');

            gradient.append('stop')
                .attr('offset', `${d.data.successProportion * 100}%`)
                .attr('stop-color', '#2ca02c');

            gradient.append('stop')
                .attr('offset', `${d.data.successProportion * 100}%`)
                .attr('stop-color', '#d62728');

            d.data.gradientId = gradientId;
        }
    });

    const node = svg.selectAll(`.${className}`)
        .data(root.leaves())
        .enter().append('g')
        .attr('class', className)
        .attr('transform', d => `translate(${d.x},${d.y})`)
        .on('click', (event, d) => handleBubbleClick(d.data));

    node.append('foreignObject')
        .attr('class', 'clickable')
        .attr('width', d => Math.max(d.r * 2, minRadius * 2))
        .attr('height', d => Math.max(d.r * 2, minRadius * 2))
        .attr('x', d => -Math.max(d.r, minRadius))
        .attr('y', d => -Math.max(d.r, minRadius))
        .append('xhtml:div')
        .style('width', '100%')
        .style('height', '100%')
        .style('display', 'flex')
        .style('align-items', 'center')
        .style('justify-content', 'center')
        .html(d => {
            if (view === 'rocket') {
                return `<i class="fas fa-rocket" style="font-size:${Math.max(d.r, minRadius)}px; background: linear-gradient(90deg, #2ca02c ${d.data.successProportion * 100}%, #d62728 ${d.data.successProportion * 100}%); -webkit-background-clip: text; -webkit-text-fill-color: transparent;"></i>`;
            } else if (view === 'company' || view === 'allcompany') {
                return `<i class="fas fa-rocket" style="font-size:${Math.max(d.r, minRadius)}px; color: ${d.data.type === 'P' ? '#1f77b4' : '#ff7f0e'};"></i>`;
            } else {
                return `<i class="fas fa-rocket" style="font-size:${Math.max(d.r, minRadius)}px; color: ${colorScale(d.data.label)};"></i>`;
            }
        });

    node.on('mouseover', function (event, d) {
        d3.select(this).raise();
        d3.select(this).select('text').transition().duration(200).attr('font-size', '24px');
        setHoverInfo({
            label: d.data.label,
            value: d.data.value,
            yearRange: d.data.yearRange,
            companies: d.data.companies,
            totalMissions: d.data.totalMissions,
            successCount: d.data.successCount,
            failureCount: d.data.failureCount,
            country: (view === 'company' || view === 'allcompany' )? d.data.country : undefined,
        });
    })
        .on('mouseout', function (event, d) {
            d3.select(this).select('text').transition().duration(200).attr('font-size', d => Math.max(d.r / 5, 12));
            setHoverInfo({ label: 'Hover over a rocket to see details here.' });
        });

    node.append('title')
        .text(d => `${d.data.label}\nCost: ${d.data.value}\nSuccess Proportion: ${(d.data.successProportion * 100).toFixed(2)}%`);

    node.append('text')
        .attr('dy', '.2em')
        .attr('text-anchor', 'middle')
        .text(d => d.data.label)
        .attr('font-size', d => Math.max(d.r / 5, 12))
        .attr('fill', '#000000')
        .raise();

    // Legend code
    if (view === 'company' || view === 'rocket' || view === 'allcompany') {
        const legend = svg.append('g')
            .attr('class', 'legend')
            .attr('transform', `translate(20, ${height - 100})`);

        legend.append('rect')
            .attr('width', 160)
            .attr('height', 90)
            .attr('fill', '#f0f0f0')
            .attr('stroke', '#ccc')
            .attr('stroke-width', 1);

        const legendData = view === 'company' || view === 'allcompany'
            ? [{ type: 'Private', color: '#1f77b4' }, { type: 'State', color: '#ff7f0e' }]
            : [{ type: 'Success', color: '#2ca02c' }, { type: 'Failure', color: '#d62728' }];

        legend.selectAll('circle')
            .data(legendData)
            .enter()
            .append('circle')
            .attr('cx', 10)
            .attr('cy', (d, i) => 20 + i * 20)
            .attr('r', 6)
            .attr('fill', d => d.color);

        legend.selectAll('text')
            .data(legendData)
            .enter()
            .append('text')
            .attr('x', 30)
            .attr('y', (d, i) => 20 + i * 20)
            .attr('dy', '0.35em')
            .text(d => d.type)
            .attr('font-size', '12px')
            .attr('fill', '#000');
    }
};




  useEffect(() => {
    const svg = d3.select(svgRef.current);
    svg.selectAll('*').remove();

    const width = svgRef.current.clientWidth;
    const height = svgRef.current.clientHeight;

    svg.append('rect')
      .attr('width', width)
      .attr('height', height)
      .attr('fill', '#f0f0f0');

    if (view === 'country') {
      renderBubbles(filteredData, svg, width, height, 'country-node');
    } else if (view === 'company') {
      renderBubbles(companyData, svg, width, height, 'company-node');
    } else if (view === 'rocket') {
      renderBubbles(rocketData, svg, width, height, 'rocket-node');
    } else if (view === 'allcompany') {
      renderBubbles(companyData, svg, width, height, 'company-node');
    }
  }, [filteredData, companyData, rocketData, view]);

  const handleCountryButtonClick = () => {
    setView('country');
    setHierarchy([]);
    setHistory([]);
    updateFilteredData(data, yearRange, 'country');
  };

  const handleCompanyButtonClick = () => {
    const allCompanies = groupByCompany(data, '');
    setCompanyData(allCompanies);
    setView('allcompany');
    setHierarchy(['All']);
    setHistory([]);
  };

  return (
    <div className="rocket-missions">
      <h2>Cost of Space Missions by Country, Company, and Rocket</h2>
      <p className="intro-text">
        .
      </p>

      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', position: 'relative' }}>
        <h3>{title}</h3>
        <p className="view-description">
          {view === 'country' && (
            <>
              <strong>Country Level:</strong> Discover the total cost of space missions by different countries. Each rocket represents a country, sized according to its total mission cost. Click on a country rocket to explore the companies that are spearheading its space missions.
            </>
          )}
          {view === 'company' && (
            <>
              <strong>Company Level:</strong> Explore the key players from <em>{hierarchy[0]}</em> and their contributions to space missions. Each rocket represents a company, providing insights into their investments and activities. Click on a company rocket to delve into the specific rockets they have launched.
            </>
          )}
          {view === 'rocket' && (
            <>
              <strong>Rocket Level:</strong> Dive into the specifics of rockets launched by <em>{hierarchy[1]}</em>. Here, you can see the success and failure rates of each rocket, highlighting their journey through the stars.
            </>
          )}
          {view === 'allcompany' && (
            <>
              <strong>Global Companies:</strong> View the global landscape of companies involved in space missions. Each rocket showcases a company's overall contribution. Click on a company rocket to uncover the rockets they have launched.
            </>
          )}
        </p>
        <div className="button-group">
        <button className={view === 'country' ? 'active' : ''} onClick={handleCountryButtonClick}>
          🌍 All Countries
        </button>
        <button className={view === 'allcompany' ? 'active' : ''} onClick={handleCompanyButtonClick}>
          🏢 All Companies
        </button>
      </div>
      <button
        className="back-button"
        onClick={handleBackClick}
        disabled={view === 'country'}
      >
        <i className="fas fa-rocket" style={{ marginRight: '8px' }}></i>Back
      </button>
      <div className="slider-container">
        <label>Filter by Year Range:</label>
        <CustomSlider
          label=""
          value={yearRange}
          setValue={handleYearRangeChange}
        />
        <div className="year-range">
          <span>{yearRange[0]}</span> - <span>{yearRange[1]}</span>
        </div>
      </div>
        <div style={{ position: 'relative', width: '100%', height: '580px' }}>
          <svg ref={svgRef} width="100%" height="100%"></svg>
          <div className="hover-info" style={{ position: 'absolute', top: '20px', right: '20px' }}>
            <h3>{hoverInfo.label}</h3>
            {hoverInfo.country && (
                <p>Country: {hoverInfo.country}</p>
            )}
            {hoverInfo.value && (
                <p>Total accumulated cost of missions: {formatNumber(hoverInfo.value)} million $</p>
            )}
            {hoverInfo.yearRange && (
                <p>Active Years: {hoverInfo.yearRange}</p>
            )}
            {hoverInfo.companies && (
                <p>Top Companies: {hoverInfo.companies.slice(0, 3).join(', ')}</p>
            )}
            {hoverInfo.totalMissions && (
                <p>Total Missions: {hoverInfo.totalMissions}</p>
            )}
            {hoverInfo.successCount !== undefined && hoverInfo.failureCount !== undefined && (
                <p>Successes: {hoverInfo.successCount}, Failures: {hoverInfo.failureCount}</p>
            )}
        </div>
        </div>
      </div>
      <div className={styles.navigationButtons}>
          <button onClick={() => handleNavigate('/apollo-evolution')} style={{ justifyContent: 'flex-start' }}>
            <FontAwesomeIcon icon={faRocket} /> Back to Apollo Evolution
          </button>
          <button onClick={() => handleNavigate('/living-in-space')}>
            <FontAwesomeIcon icon={faRocket} /> Go to Living In Space
          </button>
        </div>
    </div>
  );
};




export default RocketMissions;
