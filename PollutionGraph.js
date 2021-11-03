<html>
<head>
  <script type="text/javascript" 
  src="https://www.gstatic.com/charts/loader.js"></script>
  <script type="text/javascript">
    google.charts.load('current', {packages: ['corechart', 'line']});
google.charts.setOnLoadCallback(drawBasic);

function drawBasic() {

      var data = new google.visualization.DataTable();
      data.addColumn('string', 'X');
      data.addColumn('number', 'Landfilled');
      data.addColumn('number', 'Recycled');
      data.addColumn('number', 'Combustion with Energy Recovered');

      data.addRows([
        ['1960', 390000, 0, 0], ['1970', 2900000, 0, 0], ['1980', 6670000, 20000, 140000], ['1990', 13780000, 370000, 2980000], ['2000', 19950000, 1480000, 4120000], ['2005', 23270000, 1780000, 4330000], ['2010', 24370000, 2500000, 4530000], ['2015', 26030000, 3120000, 5330000], ['2017', 26820000, 3000000, 5590000], ['2018', 26970000, 3090000, 5620000]
      ]);

      var options = {
        hAxis: {
          title: 'Year',
          format: '####'
        },
        vAxis: {
          title: 'Tons'
        },
        explorer: {
            keepInBounds: true,
            actions: ['dragToZoom', 'rightClickToReset']
        },
        legend: {
            position: 'bottom',
        }      
      };

      var chart = new google.visualization.LineChart(document.getElementById('chart_div'));

      chart.draw(data, options);
    }
  </script>
</head>
<body>
<div id="chart_div" class="main"></div>
</body>
<style>
  .main {
    
  }
</style>
</html>
