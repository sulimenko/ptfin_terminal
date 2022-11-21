// eslint-disable-next-line require-jsdoc
export default function() {
  const font = {
    family: 'Roboto',
    weight: 'normal',
  }
  const options = {
    grid: {
      show: true,
      horizontal: {
        show: true,
        size: 1,
        color: '#efefef',
        // 'solid'|'dash'
        style: 'dash',
        dashValue: [ 2, 2, ],
      },
      vertical: {
        show: true,
        size: 1,
        color: '#efefef',
        // 'solid'|'dash'
        style: 'dash',
        dashValue: [ 2, 2, ],
      },
    },
    candle: {
      margin: {
        top: 0.5,
        bottom: 0.1,
      },
      // 'candle_solid'|'candle_stroke'|'candle_up_stroke'|'candle_down_stroke'|'ohlc'|'area'
      type: 'candle_solid',
      bar: {
        upColor: '#59CC9F',
        downColor: '#FF8383',
        noChangeColor: '#888888',
      },
      area: {
        lineSize: 2,
        lineColor: '#2196F3',
        value: 'close',
        fillColor: [
          {
            offset: 0,
            color: 'rgba(33, 150, 243, 0.01)',
          },
          {
            offset: 1,
            color: 'rgba(33, 150, 243, 0.2)',
          },
        ],
      },
      priceMark: {
        show: true,
        high: {
          show: true,
          color: '#c9c9c9',
          textMargin: 5,
          textSize: 10,
          textFamily: font.family,
          textWeight: font.weight,
        },
        low: {
          show: true,
          color: '#c9c9c9',
          textMargin: 5,
          textSize: 10,
          textFamily: font.family,
          textWeight: font.weight,
        },
        last: {
          show: true,
          upColor: '#26A69A',
          downColor: '#EF5350',
          noChangeColor: '#888888',
          line: {
            show: true,
            // 'solid'|'dash'
            style: 'dash',
            dashValue: [ 4, 4, ],
            size: 1,
          },
          text: {
            show: true,
            size: 12,
            paddingLeft: 2,
            paddingTop: 2,
            paddingRight: 2,
            paddingBottom: 2,
            color: '#FFFFFF',
            family: font.family,
            weight: font.weight,
          },
        },
      },
      tooltip: {
        showRule: 'always',
        showType: 'standard',
        labels: [ '', 'Open: ', 'Close: ', 'High: ', 'Low: ', 'Volume: ', ],
        values: null,
        defaultValue: 'n/a',
        rect: {
          paddingLeft: 0,
          paddingRight: 0,
          paddingTop: 0,
          paddingBottom: 6,
          offsetLeft: 8,
          offsetTop: 8,
          offsetRight: 8,
          borderRadius: 4,
          borderSize: 1,
          borderColor: '#3f4254',
          fillColor: 'rgba(17, 17, 17, .3)',
        },
        text: {
          size: 12,
          family: font.family,
          weight: font.weight,
          color: '#c9c9c9',
          marginLeft: 8,
          marginTop: 10,
          marginRight: 8,
          marginBottom: 0,
        },
      },
    },
    technicalIndicator: {
      margin: {
        top: 0.8,
        bottom: 0,
      },
      bar: {
        upColor: '#B0FADD',
        downColor: '#FFAFAF',
        noChangeColor: '#888888',
      },
      line: {
        size: 1,
        colors: [ '#FF9600', '#9D65C9', '#2196F3', '#E11D74', '#01C5C4', ],
      },
      circle: {
        upColor: '#26A69A',
        downColor: '#EF5350',
        noChangeColor: '#888888',
      },
      lastValueMark: {
        show: false,
        text: {
          show: false,
          color: '#ffffff',
          size: 12,
          family: font.family,
          weight: font.weight,
          paddingLeft: 3,
          paddingTop: 2,
          paddingRight: 3,
          paddingBottom: 2,
        },
      },
      tooltip: {
        showRule: 'always',
        showName: true,
        showParams: true,
        defaultValue: 'n/a',
        text: {
          size: 12,
          family: font.family,
          weight: font.weight,
          color: '#D9D9D9',
          marginTop: 6,
          marginRight: 8,
          marginBottom: 0,
          marginLeft: 8,
        },
      },
    },
    xAxis: {
      show: true,
      height: null,
      axisLine: {
        show: true,
        color: '#efefef',
        size: 1,
      },
      tickText: {
        show: true,
        color: '#D9D9D9',
        family: font.family,
        weight: font.weight,
        size: 12,
        paddingTop: 3,
        paddingBottom: 6,
      },
      tickLine: {
        show: true,
        size: 1,
        length: 3,
        color: '#888888',
      },
    },
    yAxis: {
      show: true,
      width: null,
      // 'left' | 'right'
      position: 'right',
      // 'normal' | 'percentage'
      type: 'normal',
      inside: false,
      axisLine: {
        show: true,
        color: '#efefef',
        size: 1,
      },
      tickText: {
        show: true,
        color: '#D9D9D9',
        family: font.family,
        weight: font.weight,
        size: 12,
        paddingLeft: 3,
        paddingRight: 6,
      },
      tickLine: {
        show: true,
        size: 1,
        length: 3,
        color: '#888888',
      },
    },
    separator: {
      size: 1,
      color: '#efefef',
      fill: true,
      activeBackgroundColor: 'rgba(230, 230, 230, .15)',
    },
    crosshair: {
      show: true,
      horizontal: {
        show: true,
        line: {
          show: true,
          // 'solid'|'dash'
          style: 'dash',
          dashValue: [ 4, 2, ],
          size: 1,
          color: '#00AECE',
        },
        text: {
          show: true,
          color: '#FFF',
          size: 12,
          family: font.family,
          weight: font.weight,
          paddingLeft: 5,
          paddingRight: 5,
          paddingTop: 2,
          paddingBottom: 2,
          borderSize: 0,
          borderColor: '#00AECE',
          backgroundColor: '#00AECE',
        },
      },
      vertical: {
        show: true,
        line: {
          show: true,
          // 'solid'|'dash'
          style: 'dash',
          dashValue: [ 4, 2, ],
          size: 1,
          color: '#00AECE',
        },
        text: {
          show: true,
          color: '#FFF',
          size: 12,
          family: font.family,
          weight: font.weight,
          paddingLeft: 5,
          paddingRight: 5,
          paddingTop: 2,
          paddingBottom: 2,
          borderSize: 0,
          borderColor: '#00AECE',
          backgroundColor: '#00AECE',
        },
      },
    },
    graphicMark: {
      line: {
        color: '#2196F3',
        size: 1,
      },
      point: {
        backgroundColor: '#2196F3',
        borderColor: '#2196F3',
        borderSize: 1,
        radius: 4,
        activeBackgroundColor: '#2196F3',
        activeBorderColor: '#2196F3',
        activeBorderSize: 1,
        activeRadius: 6,
      },
      polygon: {
        stroke: {
          size: 1,
          color: '#2196F3',
        },
        fill: {
          color: 'rgba(33, 150, 243, 0.1)',
        },
      },
      arc: {
        stroke: {
          size: 1,
          color: '#2196F3',
        },
        fill: {
          color: 'rgba(33, 150, 243, 0.1)',
        },
      },
      text: {
        color: '#2196F3',
        size: 12,
        family: font.family,
        weight: font.weight,
        marginLeft: 2,
        marginRight: 2,
        marginTop: 2,
        marginBottom: 6,
      },
    },
  }
  console.log(options)
  return options
//     switch (name) {
//     case light
//   }
}
