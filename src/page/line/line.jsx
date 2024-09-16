import { Box, useTheme } from "@mui/material";
import { ResponsiveLine } from "@nivo/line";

const data =[

    {
      "id": "france",
      "color": "hsl(230, 70%, 50%)",
      "data": [
        {
          "x": "plane",
          "y": 254
        },
        {
          "x": "helicopter",
          "y": 264
        },
        {
          "x": "boat",
          "y": 162
        },
        {
          "x": "train",
          "y": 113
        },
        {
          "x": "subway",
          "y": 21
        },
        {
          "x": "bus",
          "y": 8
        },
        {
          "x": "car",
          "y": 288
        },
        {
          "x": "moto",
          "y": 236
        },
        {
          "x": "bicycle",
          "y": 298
        },
        {
          "x": "horse",
          "y": 84
        },
        {
          "x": "skateboard",
          "y": 138
        },
        {
          "x": "others",
          "y": 122
        }
      ]
    },
    {
      "id": "us",
      "color": "hsl(256, 70%, 50%)",
      "data": [
        {
          "x": "plane",
          "y": 90
        },
        {
          "x": "helicopter",
          "y": 271
        },
        {
          "x": "boat",
          "y": 174
        },
        {
          "x": "train",
          "y": 222
        },
        {
          "x": "subway",
          "y": 71
        },
        {
          "x": "bus",
          "y": 242
        },
        {
          "x": "car",
          "y": 80
        },
        {
          "x": "moto",
          "y": 143
        },
        {
          "x": "bicycle",
          "y": 80
        },
        {
          "x": "horse",
          "y": 79
        },
        {
          "x": "skateboard",
          "y": 257
        },
        {
          "x": "others",
          "y": 236
        }
      ]
    },
    {
      "id": "germany",
      "color": "hsl(37, 70%, 50%)",
      "data": [
        {
          "x": "plane",
          "y": 89
        },
        {
          "x": "helicopter",
          "y": 150
        },
        {
          "x": "boat",
          "y": 1
        },
        {
          "x": "train",
          "y": 20
        },
        {
          "x": "subway",
          "y": 28
        },
        {
          "x": "bus",
          "y": 146
        },
        {
          "x": "car",
          "y": 180
        },
        {
          "x": "moto",
          "y": 48
        },
        {
          "x": "bicycle",
          "y": 200
        },
        {
          "x": "horse",
          "y": 46
        },
        {
          "x": "skateboard",
          "y": 168
        },
        {
          "x": "others",
          "y": 185
        }
      ]
    },
    {
      "id": "norway",
      "color": "hsl(128, 70%, 50%)",
      "data": [
        {
          "x": "plane",
          "y": 79
        },
        {
          "x": "helicopter",
          "y": 37
        },
        {
          "x": "boat",
          "y": 163
        },
        {
          "x": "train",
          "y": 123
        },
        {
          "x": "subway",
          "y": 177
        },
        {
          "x": "bus",
          "y": 83
        },
        {
          "x": "car",
          "y": 81
        },
        {
          "x": "moto",
          "y": 184
        },
        {
          "x": "bicycle",
          "y": 258
        },
        {
          "x": "horse",
          "y": 21
        },
        {
          "x": "skateboard",
          "y": 281
        },
        {
          "x": "others",
          "y": 56
        }
      ]
    }
  ]
const Line = () => {
    const theme = useTheme()

  return (
    <Box sx={{height:'75vh'}}>
    <ResponsiveLine

theme={
{
  "text": {
      "fontSize": 11,
      "fill": theme.palette.text.primary,
      "outlineWidth": 0,
      "outlineColor": "transparent"
  },
  "axis": {
      "domain": {
          "line": {
              "stroke": theme.palette.divider,
              "strokeWidth": 1
          }
      },
      "legend": {
          "text": {
              "fontSize": 12,
              "fill": theme.palette.text.primary,
              "outlineWidth": 0,
              "outlineColor": "transparent"
          }
      },
      "ticks": {
          "line": {
              "stroke": theme.palette.divider,
              "strokeWidth": 1
          },
          "text": {
              "fontSize": 11,
              "fill": theme.palette.text.secondary,
              "outlineWidth": 0,
              "outlineColor": "transparent"
          }
      }
  },
  "grid": {
      "line": {
          "stroke": theme.palette.divider,
          "strokeWidth": 0
      }
  },
  "legends": {
      "title": {
          "text": {
              "fontSize": 11,
              "fill": theme.palette.text.primary,
              "outlineWidth": 0,
              "outlineColor": "transparent"
          }
      },
      "text": {
          "fontSize": 11,
          "fill": theme.palette.text.primary,
          "outlineWidth": 0,
          "outlineColor": "transparent"
      },
      "ticks": {
          "line": {},
          "text": {
              "fontSize": 10,
              "fill": theme.palette.text.primary,
              "outlineWidth": 0,
              "outlineColor": "transparent"
          }
      }
  },
  "annotations": {
      "text": {
          "fontSize": 13,
          "fill": theme.palette.text.primary,
          "outlineWidth": 2,
          "outlineColor": "#ffffff",
          "outlineOpacity": 1
      },
      "link": {
          "stroke": "#000000",
          "strokeWidth": 1,
          "outlineWidth": 2,
          "outlineColor": "#ffffff",
          "outlineOpacity": 1
      },
      "outline": {
          "stroke": "#000000",
          "strokeWidth": 2,
          "outlineWidth": 2,
          "outlineColor": "#ffffff",
          "outlineOpacity": 1
      },
      "symbol": {
          "fill": "#000000",
          "outlineWidth": 2,
          "outlineColor": "#ffffff",
          "outlineOpacity": 1
      }
  },
  "tooltip": {
      "wrapper": {},
      "container": {
          "background": theme.palette.background.default,
          "color": theme.palette.text.primary,
          "fontSize": 12
      },
      "basic": {},
      "chip": {},
      "table": {},
      "tableCell": {},
      "tableCellValue": {}
  }
}
}
      data={data}
      curve="catmullRom"
      margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
      xScale={{ type: 'point' }}
      yScale={{
          type: 'linear',
          min: 'auto',
          max: 'auto',
          stacked: true,
          reverse: false
      }}
      yFormat=" >-.2f"
      axisTop={null}
      axisRight={null}
      axisBottom={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: 'transportation',
          legendOffset: 36,
          legendPosition: 'middle',
          truncateTickAt: 0
      }}
      axisLeft={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: 'Count',
          legendOffset: -45,
          legendPosition: 'middle',
          truncateTickAt: 0
      }}
      pointSize={10}
      pointColor={{ theme: 'background' }}
      pointBorderWidth={2}
      pointBorderColor={{ from: 'serieColor' }}
      pointLabel="data.yFormatted"
      pointLabelYOffset={-12}
      enableTouchCrosshair={true}
      useMesh={true}
      legends={[
          {
              anchor: 'bottom-right',
              direction: 'column',
              justify: false,
              translateX: 100,
              translateY: 0,
              itemsSpacing: 0,
              itemDirection: 'left-to-right',
              itemWidth: 80,
              itemHeight: 20,
              itemOpacity: 0.75,
              symbolSize: 12,
              symbolShape: 'circle',
              symbolBorderColor: 'rgba(0, 0, 0, .5)',
              effects: [
                  {
                      on: 'hover',
                      style: {
                          itemBackground: 'rgba(0, 0, 0, .03)',
                          itemOpacity: 1
                      }
                  }
              ]
          }
      ]}
  />
  </Box>
  )
}
export default Line