# "o2-chart" D3.js(バージョン４)を利用したAngular2用グラフライブラリ


"o2-chart"は、TypeScript2によって記述されたd3.js(バージョン４)ベースのAngular2用のグラフライブラリです。

**概要**
   - "o2-chart"は、d3.js(バージョン４)のラッパライブラリです。
   - 以下の12の基本グラフをサポート

    (折れ線グラフ、円グラフ、棒グラフ、散布図、ヒストグラム、積み上げ棒グラフ、世界地図、地球図、ツリー、パックレイアウト,コロプレス、フォース)
    
   - 軸・目盛り

    必要に応じ、X軸、Y軸及びその目盛りが自動生成されます。値確認用の基準線も自動生成されます。表示・非表示は設定ファイルで行うことができます。
    
   - レジェンド 

    グラフカラーの識別用のレジェンドを自動生成することができます。表示・非表示は設定ファイルで可。

   - アニメーション

    グラフの表示に際し、アニメーションさせることができます。この機能をサポートしているのは、棒グラフ、円グラフ、ヒストグラム、積み上げ棒グラフ,地球図、パックレイアウトです。アニメーションを付加するか否かは、設定ファイルで設定。
    

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

    
    なお、デフォルトではアニメーション可の設定となっているので、上記のアニメーション対応グラフすべてが、アニメーションすることになり、マシンによっては反応が遅くなりますので、ご注意ください。 
    
**必要環境**

   - node.js
   - typescript2
   - Angular2
   - Angular-cli


**ダウンロード方法**

　以下のサイトよりダウンロードないしクローンを生成できます。

    <https://github.com/Ohtsu/o2-chart>

　git clone を利用する場合は、インストールしたいディレクトリを作成し、そのディレクトリ内でコマンドプロンプトから以下のようにgit cloneを実行します。

    - md mydirectory
    - cd mydirectory
    - git clone https://github.com/Ohtsu/o2-chart.git


**インストール方法**
　インストールには、npmを利用しますので、node.jsをインストールされていない方は、まずnode.jsをインストールしておいてください。
　git cloneを実行すると、"o2-chart"というディレクトリが生成されますので、そのディレクトリに入ってから、以下のようにnpmで必要なファイルをインストールします。

   - cd o2-chart　　（コマンドプロンプト上で実行）
   - npm install   
   
     
**実行方法** 

　インストールが終了しますと、新たに"src"ディレクトリが生成されますので、そのディレクトリに入り、以下のようにローカルサーバを起動します。

  - cd src
  - ng serve

  するとローカルのhttpサーバが起動されますので、ブラウザから以下のアドレスにアクセスし、サンプルプログラムを起動します。
  
  - "http://localhost:4200"  

 正常に起動した場合には、回転する地球図が表示されます。
 
**データ**

 データには、設定データと統計などのグラフ用データの二種類があります。
 
 - 設定データ(configData)
 
 このデータは、基本的にすべてのグラフに共通するデータであり、以下の内容が含まれています。
 
 -"index.html"などの中で定義されている「クラス名」。このクラスにより、カラーやフォントの大きさを必要に応じ変更することができます。
 
 -タイトル名　グラフ上部にタイトルを表示したい場合に設定します。
 
 -レジェンド (表示・非表示、位置、サイズ)
 
 -カラー (自動で設定されるカラーの種類数:10または20, 透明度) 
 
 -線の形状 (interpolate)
 
 -基準線 (表示・非表示、位置、サイズ)
 
 -マージン (上下左右、グラフ間のマージン)
 
 -X軸Y軸 (左マージン、下マージン)
 
 -アニメーション (使用・不使用, 遅延時間)
 
 　なお、グラフによっては設定できない項目も含まれています。詳しくは、"app.components.ts"ファイル内の"this.configData"を参照してください。
 
 
 - グラフ用統計データ(graphData)

 それぞれのグラフには、Jsonフォーマットの統計データが必要になります。このデータの形式は、グラフの利用目的の違いから、グラフごとに異なります。
 詳しくは"app.components.ts"ファイル内の(グラフ名)DataJsonの内容を参照してください。例えば、折れ線グラフのデータ形式については、"this.lineDataJson"を参照してください。
 
**バージョン**

   - o2-chart    : 2.0
   - Angular2   : 2.1.0
   - TypeScript : 2.0.3
   - d3.js      : 4.3.0
   



**参考文献**

　本ツールを作成するにあたり、大変参考になった文献を以下に掲げます。

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

**更新履歴**

 - 2016.3.11 version 1.0 uploaded (旧名 "o2d3ng2")
 - 2016.11.23 version 2.0 uploaded ("o2-chart"に名称変更)

**Copyright**

MIT License
copyright 2016 by Shuichi Ohtsu (DigiPub Japan)
