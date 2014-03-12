Precipitation
=============

Steps to process and visualize NOAA's precipitation data

<h2> Step 1 </h2>

<p> Visit the National Oceanic and Atmospheric Administration (NOAA) <a href="http://water.weather.gov/precip/download.php" target="_blank">precipitation data website</a>. You can find rainfall data on many temporal resolutions. Use the GUI to download a shapefile</p>

<h2> Step 2 </h2>

<p> Using <a href="http://www.gdal.org/ogr2ogr.html" target="_blank">ogr2ogr</a>, convert the dowloaded shapefile to a .csv.   In order to do this, enter into the  folder with all the downloaded files in the terminal.  Then, use the following code: <p>

<pre><code>

ogr2ogr -f CSV  output.csv  filename.shp -lco GEOMETRY=AS_XYZ

</code></pre>

<h2> Step 3 </h2>

<p> Shrink the filesize by deleting all the columns other that "Lat", "Lon", and "Glob".

