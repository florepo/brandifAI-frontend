import React, { Component } from "react";
import Chart from "react-apexcharts";

class ApexChart extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      series: [
        { name: "Top 10 tags",
          data: []
        }
      ],
      options: {
        chart: {
          type: "bar",
          height: 350
        },
        plotOptions: {
          bar: {
            horizontal: true
          }
        },
        dataLabels: {
          enabled: false
        },
        xaxis: {
          categories: []
        }
      }
    };
  }
  setParams = () => {
    const series = [{ name: "Top 10 tags", data: this.props.data.slice(0, 10) }];
    const categories = this.props.labels.slice(0, 10);
    this.setState({
      series: series,
      options: {
        chart: {
          type: "bar",
          height: 350
        },
        plotOptions: {
          bar: {
            horizontal: true
          }
        },
        dataLabels: {
          enabled: false
        },
        xaxis: {
          categories: categories
        }
      }
    });
  };

  componentDidMount() {
    this.setParams();
  }

  componentDidUpdate(prevProps) {
    if (this.props.data !== prevProps.data) {
      this.setParams();
    }
  }

  render() {
    return (
      <div id="chart">
        <Chart
          options={this.state.options}
          series={this.state.series}
          type="bar"
          height={350}
        />
      </div>
    );
  }
}

export default ApexChart;
