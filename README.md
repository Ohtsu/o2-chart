# "o2-chart" Chart Library for Angular2 by TypeScript2

[![MIT License](http://img.shields.io/badge/license-MIT-blue.svg?style=flat)](LICENSE)


"o2-chart" is a chart library using d3.js (version 4) for Angular2 written by TypeScript2.

[![Demo](https://ohtsu.github.io/o2-chart/)]


**Overview**
   - "o2-chart" is a wrapper library of d3.js (version 4) for Angular2
   - 12 main charts are supported

    (Line,Bar,Pie,ScatterPlot,Histogram,Stack Bar, Geo Map, Geo Orthographic, Tree, Pack Layout, Choropleth,Force)
    
   - Axis

    You can include axis automatically by the configuration file.
   
   - Legend 

    You can include legend automatically by the configuration file.

   - Animation

    You can animate such charts as Bar, Pie, Histogram, Stack Bar,Geo Orthographic and Pack Layout charts by the configuration file.
  

  <img src="https://raw.githubusercontent.com/Ohtsu/images/master/Line01.png" width= "640" >

  <img src="https://raw.githubusercontent.com/Ohtsu/images/master/Bar01.png" width= "640" >

  <img src="https://raw.githubusercontent.com/Ohtsu/images/master/Pie01.png" width= "640" >
    
  <img src="https://raw.githubusercontent.com/Ohtsu/images/master/ScatterPlot01.png" width= "640" >
    
  <img src="https://raw.githubusercontent.com/Ohtsu/images/master/Histogram01.png" width= "640" >

  <img src="https://raw.githubusercontent.com/Ohtsu/images/master/StackBar01.png" width= "640" >

  <img src="https://raw.githubusercontent.com/Ohtsu/images/master/GeoMap01.png" width= "640" >

  <img src="https://raw.githubusercontent.com/Ohtsu/images/master/GeoOrthographic01.png" width= "640" >

  <img src="https://raw.githubusercontent.com/Ohtsu/images/master/Tree01.png" width= "640" >

  <img src="https://raw.githubusercontent.com/Ohtsu/images/master/PackLayout01.png" width= "640" >

  <img src="https://raw.githubusercontent.com/Ohtsu/images/master/Choropleth01.png" width= "640" >

  <img src="https://raw.githubusercontent.com/Ohtsu/images/master/Force01.png" width= "640" >



**Prerequisite**

   - node.js
   - typescript2
   - Angular2
   - Angular-cli


**Install**

Download or clone all the source files. 

   - input "git clone https://github.com/Ohtsu/o2-chart.git" in the command prompt.
 
   - input "npm install" in the command prompt.
 
  
     Then all the filles will be installed in your local directory.
     
**How to run** 

  - input "cd src" in the same directory.
  
  - input "ng serve" .

     Then local http server will start.
     You can get views of the sample program by accessing "http://localhost:4200" in your browser .  

**Chart Data**

 There are two types of data:"configData","graphData".
 
 - configData
 
 This is a common setting data of all charts. In this file, you can set info as follows.
 
 -Class name defined by "html" file
 
 -Title Name
 
 -Legend (display or not, position, size)
 
 -Color (Auto color number: 10 or 20, Opacity) 
 
 -Line (interpolate)
 
 -Grid (display or not, position, size)

 -Animation (enable or not, duration)
 
 -Margin (top, left, right,bottom,between)
 
 -Axis (left margin, bottom mergin)
 
  <img src="https://raw.githubusercontent.com/Ohtsu/images/master/DisplayLayout01.png" width= "640" >

 In more details, please refer to the sample "this.configData" in app.components.ts.
 
 
 - graphData

 Each chart needs its own data in Json format. You can understand the format easily by referencing to the Json Data. For example, if you want to know Line chart data format, please refer to "this.lineDataJson" in app.components.ts.

**Version**

   - o2chart    : 2.0
   - Angular2   : 2.1.0
   - TypeScript : 2.0.3
   - d3.js      : 4.3.0
   

**Reference**

- "データビジュアライゼーションのためのD3.js徹底入門 Webで魅せるグラフ&チャートの作り方",2014/6/6,by 古籏 一浩, 
<http://www.amazon.co.jp/s/ref=nb_sb_noss?__mk_ja_JP=%E3%82%AB%E3%82%BF%E3%82%AB%E3%83%8A&url=search-alias%3Daps&field-keywords=ISBN978-4-7973-6886-4&rh=i%3Aaps%2Ck%3AISBN978-4-7973-6886-4>

- "D3.js by Example",2015/12/29,by Michael Heydt
<http://www.amazon.co.jp/s/ref=nb_sb_noss?__mk_ja_JP=%E3%82%AB%E3%82%BF%E3%82%AB%E3%83%8A&url=search-alias%3Daps&field-keywords=ISBN978-1-78528-008-5&rh=i%3Aaps%2Ck%3AISBN978-1-78528-008-5>

- "Mastering D3.js",2014/8/25,by Pablo Navarro,
<http://www.amazon.co.jp/s/ref=nb_sb_noss?__mk_ja_JP=%E3%82%AB%E3%82%BF%E3%82%AB%E3%83%8A&url=search-alias%3Daps&field-keywords=ISBN978-1-78328-627-0&rh=i%3Aaps%2Ck%3AISBN978-1-78328-627-0>

- "Data Visualization With D3 and Angularjs",2015/4/27,by Christoph Korner,
<http://www.amazon.co.jp/s/ref=nb_sb_noss?__mk_ja_JP=%E3%82%AB%E3%82%BF%E3%82%AB%E3%83%8A&url=search-alias%3Daps&field-keywords=ISBN978-1-78439-848-4&rh=i%3Aaps%2Ck%3AISBN978-1-78439-848-4>

- "Mastering TypeScript",2015/4/23,by Nathan Rozentals,
<http://www.amazon.co.jp/s/ref=nb_sb_noss?__mk_ja_JP=%E3%82%AB%E3%82%BF%E3%82%AB%E3%83%8A&url=search-alias%3Daps&field-keywords=ISBN978-1-78439-966-5&rh=i%3Aaps%2Ck%3AISBN978-1-78439-966-5>

- "D3 Tips and Tricks v4.x",by Malcolm Maclean,Leanpub,
<https://leanpub.com/d3-t-and-t-v4/read>


**Change Log**

 - 2016.3.11 version 1.0 uploaded (Old name -o2d3ng2)
 - 2016.11.23 version 2.0 uploaded (Renamed to o2chart)

**Copyright**

MIT License
copyright 2016 by Shuichi Ohtsu (DigiPub Japan)




