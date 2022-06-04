const font_Style = `font-family:'Cairo', sans-serif;`;

///////////////////////////////////////
// New Topic Section

// name = AdjacentHTML - title = topic title , content , html = code html - css= code css - js = code js
const contents = function (
  name,
  html_sections,
  title,
  content_top,
  html,
  css,
  js,
  content_bottom
) {
  let name_topic = `${name}`;
  let html_Section = `${"." + html_sections}`;

  name_topic = `
  <section class="charts mt-4">
  <div class="chart-container p-3 " style="padding: 0.3rem !important">
  
    <div class="divttyprint">
    <h3 class="Description-H3">${title}</h3> 
    ${content_top}
    </div> 
  
  </div>
  </section>
  
  
  <!-- -->
  
  <section class="charts mt-4">
  <div class='titlelang'>
  
  <div class="Show_Title_Lang_Full_Screen" style="width: 140px;
  background-color: #1d1e22;
  padding-top: 8px;
  margin: 11px 0px -13px 8px;
  color: white; display: none;">
  
  <object data="img/html-logo.svg" width="25" height="25" style="margin: 0 0 -6px 5px;"></object>
  <h3 style="display: inline-block;
  font-size: 19px;
  font-weight: bolder;
  margin-bottom: 5;
  ">HTML <spam style="font-size: 15px;">(Doc)</spam></h3>
  </div>
  
  <div class="Show_Title_Lang_Full_Screen" style="width: 140px;
  background-color: #1d1e22;
  padding-top: 8px;
  margin: 11px 0px -13px -1px;
  color: white; display: none;">
  
  <object data="img/CSS-ICON.svg" width="25" height="25" style="margin: 0 0 -6px 5px;"></object>
    <h3 style="display: inline-block;
    font-size: 19px;
    font-weight: bolder;
    margin-bottom: 5;
    ">CSS <spam style="font-size: 15px;">(Stylus)</spam></h3>
  </div>
  
  <div class="Show_Title_Lang_Full_Screen" style="width: 140px;
  background-color: #1d1e22;
  padding-top: 8px;
  margin: 11px 0px -13px -1px;
  color: white; display: none;">
  
  <object data="img/JS-ICON.svg" width="25" height="25" style="margin: 0 0 -6px 5px;"></object>
    <h3 style="display: inline-block;
    font-size: 19px;
    font-weight: bolder;
    margin-bottom: 5;
    ">JavaScript</h3>
  </div>
  </div>
  
  <div class="chart-container p-3 formating-Style ">
  <div class='title_lang' style="width: 140px;background-color: #1d1e22;padding-top: 8px">
  <object data="img/html-logo.svg" width="25" height="25" style="margin: 0 0 -6px 5px;"></object>
  <h3 style="display: inline-block;
  font-size: 19px;
  font-weight: bolder;
  margin-bottom: 5;
  ">HTML <spam style="font-size: 15px;">(Doc)</spam></h3>
  </div>
  <pre class="Formating-File" style="margin-bottom: 20px">
    
    <code class="language-html">
    ${html}
    
    </code>
    
    </pre> 
    <div class='title_lang' style="width: 140px;background-color: #1d1e22;padding-top: 8px">
    <object data="img/CSS-ICON.svg" width="25" height="25" style="margin: 0 0 -6px 5px;"></object>
    <h3 style="display: inline-block;
    font-size: 19px;
    font-weight: bolder;
    margin-bottom: 5;
    ">CSS <spam style="font-size: 15px;">(Stylus)</spam></h3>
    </div>
    
    <pre class="Formating-File" style="margin-bottom: 20px">
    <code class="language-css">
    ${css}
    </code>
    
    </pre> 
    <div class='title_lang' style="width: 140px;background-color: #1d1e22;padding-top: 8px">
    <object data="img/JS-ICON.svg" width="25" height="25" style="margin: 0 0 -6px 5px;"></object>
    <h3 style="display: inline-block;
    font-size: 19px;
    font-weight: bolder;
    margin-bottom: 5;
    ">JavaScript</h3>
    </div>
    
    <pre class="Formating-File last-pre" style="margin-bottom: 20px">
    
    <code class="language-javascript">
    ${js}
    </code>
    
    </pre> 
    
    
  </div>
  </section>
  
  <section class="charts mt-4">
  <div class="chart-container p-3 "style="padding: 0.3rem !important">
  
    <div class="divttyprint" style="${font_Style}">
    <h3 class="Description-H3">Full Description</h3>
    <P class="Description-P">
    ${content_bottom}  
  </p>
    </div> 
    
  </div>
  </section>`;

  // Fundamentals Part 1 Linking a File
  const section_topic = document.querySelector(html_Section);

  section_topic.insertAdjacentHTML("afterbegin", name_topic);
};

/////////////////////////////////////////////////////////////////////

//List Topic 'Aside left' ⭐⭐
const changeContent = function (number, topic, number_section) {
  const content = `
  <li><a href="#" class="selected_hover operations__tab operations__tab--${number}"
  // data-tab="${number}">${topic}</a></li>
  `;
  const list_linked = document.getElementById(`${number_section}`);
  list_linked.insertAdjacentHTML("beforeend", content);

  ////////////////////////////////////////////////////

  // Add New Section Veiw in HTML
  const addNewSection = `
  <div class="operations__content operations__content--${number} section__-${number} ">

  </div>
  `;
  const addMoreSec = document.getElementById("addmore");
  addMoreSec.insertAdjacentHTML("afterend", addNewSection);
};

/////////////////////////////////////////////////////////////////////////////////

// Add new Title List & Add New Section Based on (Nubmer) |&| section Number ("ul-name" , "ul-name2" "ul-name3")
changeContent(1, "Link JavaScript File", "ul-name");

// Add new Topic Content ⭐⭐

contents(
  // ⭐name_Topic = section_topic.insertAdjacentHTML("afterbegin", ➡️name_topic⬅️);

  "FundamentalsP1_1",

  // ⭐html_Section = const section_topic = document.querySelector(➡️html_Section⬅️);

  "section__-1",
  // ⭐Title

  "Link JavaScript File",

  // ⭐Content⭐

  `
  <P class="Description-P" dir=rtl>
 <br>⭐لربط ملف Js يمكن القيام بذلك بطريقتين 
 <br> 1- internal file
 <br> 2- External File 
  </P> 
`,
  // ⭐Code HTML⭐

  `
  &lt;!DOCTYPE html&gt;
  &lt;html lang="en"&gt;
    &lt;head&gt;
      &lt;meta charset="UTF-8" /&gt;
      &lt;meta name="viewport" content="width=device-width, initial-scale=1.0" /&gt;
      &lt;meta http-equiv="X-UA-Compatible" content="ie=edge" /&gt;
      &lt;link rel="stylesheet" href="style.css"/&gt;
      &lt;title&gt;JavaScript Fundamentals – Part 1&lt;/title&gt;
      &lt;script&gt;
      internal file
      &lt/script&gt;
       
    &lt;/head&gt;
    &lt;body&gt;
      &lt;h1&gt;JavaScript Fundamentals – Part 1&lt;/h1&gt;
  
      /* External File JS */
      &lt;script src="script.js"&gt;&lt;/script&gt;
  
    &lt;/body&gt;
  &lt;/html&gt;
`,

  //⭐Code CSS⭐

  `
  body {
    height: 100vh;
    display: flex;
    align-items: center;
    background: linear-gradient(to top left, #28b487, #7dd56f);
  }
  h1 {
    font-family: sans-serif;
    font-size: 50px;
    line-height: 1.3;
    width: 100%;
    padding: 30px;
    text-align: center;
    color: white;
  }  
`,

  //⭐Code JavaScript⭐

  `
  // Writing Alert
  Alert("Hello World!");
  
  let js = "amazing";
  if(js === 'amazing') alert('JavaSctipt Is Fun!')
    </code>
  `,
  // Full Description

  "⭐⭐لا يوجد⭐⭐"
);

///////////////////////////////////

// Add new Title List & Add New Section Based on (Nubmer)
changeContent(2, "(Var) (Let) (Const)", "ul-name");

// Add new Topic Content ⭐⭐

contents(
  // ⭐name_Topic = section_topic.insertAdjacentHTML("afterbegin", ➡️name_topic⬅️);

  "FundamentalsP1_2",

  // ⭐html_Section = const section_topic = document.querySelector(➡️html_Section⬅️);

  "section__-2",
  // ⭐Title

  "The Difference Between ( Var ) ( Let ) ( Const )",

  // ⭐Content⭐

  `
  <p class="Description-P" dir=rtl>⭐الـ Var لما ننشئ بيها متغير نقدر</p>
  <p class="Description-P" dir=rtl>1- نعدل علي اسم المتغير </p>
  <p class="Description-P" dir=rtl>2- الوصول ليها من داخل او خارج الاسكوب</p>
  <hr style= "color: #2a2b3d;">
  <p class="Description-P" dir=rtl>⭐ الـ Let لازم أكون ضمن الـ Scoped </p>
  <p class="Description-P" dir=rtl>1- لو جوة الـ Scope هيطبع الامر </p>
  <p class="Description-P" dir=rtl>2- لو خارج الاسكوب هيظهر خطا ❌ بسبب عدم قدرته للوصول للمتغيرات</p>
  <p class="Description-P" dir=rtl>3- تغير اسم المتغير ✔️ </p>
  <hr style= "color: #2a2b3d;">
  <p class="Description-P" dir=rtl>⭐ الـ Const لازم أكون ضمن الـ Scoped </p>
  <p class="Description-P" dir=rtl>1- لو جوة الـ Scope هيطبع الامر </p>
  <p class="Description-P" dir=rtl>2- لو خارج الاسكوب هيظهر خطا ❌ بسبب عدم قدرته للوصول للمتغيرات</p>
  <p class="Description-P" dir=rtl>3- عدم القدرة علي تغير اسم المتغير ❌ </p>
  
  
`,
  // ⭐Code HTML⭐

  `
  &lt;!DOCTYPE html&gt;
  &lt;html lang="en"&gt;
    &lt;head&gt;
      &lt;meta charset="UTF-8" /&gt;
      &lt;meta name="viewport" content="width=device-width, initial-scale=1.0" /&gt;
      &lt;meta http-equiv="X-UA-Compatible" content="ie=edge" /&gt;
      &lt;link rel="stylesheet" href="style.css"/&gt;
      &lt;title&gt;JavaScript Fundamentals – Part 1&lt;/title&gt;
      &lt;script&gt;
      internal file
      &lt/script&gt;
       
    &lt;/head&gt;
    &lt;body&gt;
      &lt;h1&gt;JavaScript Fundamentals – Part 1&lt;/h1&gt;
  
      /* External File JS */
      &lt;script src="script.js"&gt;&lt;/script&gt;
  
    &lt;/body&gt;
  &lt;/html&gt;
  
`,

  //⭐Code CSS⭐

  `
  body {
    height: 100vh;
    display: flex;
    align-items: center;
    background: linear-gradient(to top left, #28b487, #7dd56f);
  }
  h1 {
    font-family: sans-serif;
    font-size: 50px;
    line-height: 1.3;
    width: 100%;
    padding: 30px;
    text-align: center;
    color: white;
  }
`,

  //⭐Code JavaScript⭐

  `
  // Example of the Var
if(2==2){
  var name = 'Abdelrahman';
  console.log(name); // in Side Scope
}
  console.log(name); // Out Side Scope

// Let And Const == Block-Scoped

// Example of the let
if(2==2){
  let name = 'Abdelrahman';
  name = 'Mohamed'; // >> You can change the name let
  console.log(name); // in Side Scope
}
  console.log(name); // Out Side Scope (Not Working)


// Example of the const
if(2==2){
  const name = 'Abdelrahman';
  name = 'Mohamed'; // Error >> You cannot change the name Const
  console.log(name); // in Side Scope
}
  console.log(name); // Out Side Scope (Not Working)


  `,
  // Full Description

  "⭐⭐لا يوجد⭐⭐"
);

//////////////////////////////////
// Add new Title List & Add New Section Based on (Nubmer)
changeContent(3, "topic 3", "ul-name");

// Add new Topic Content ⭐⭐

contents(
  // ⭐name_Topic = section_topic.insertAdjacentHTML("afterbegin", ➡️name_topic⬅️);

  "FundamentalsP1_3",

  // ⭐html_Section = const section_topic = document.querySelector(➡️html_Section⬅️);

  "section__-3",
  // ⭐Title

  "وصـــف الموضوع رقم ثلاثه",

  // ⭐Content⭐

  `
  وصف
`,
  // ⭐Code HTML⭐

  `
&lt;!DOCTYPE html&gt;
    &lt;html lang="en"&gt;
      &lt;head&gt;
        &lt;meta charset="UTF-8" /&gt;
        &lt;meta name="viewport" content="width=device-width, initial-scale=1.0" /&gt;
        &lt;meta http-equiv="X-UA-Compatible" content="ie=edge" /&gt;
        &lt;link rel="stylesheet" href="style.css"/&gt;
        &lt;title&gt;JavaScript Fundamentals – Part 1&lt;/title&gt;
        &lt;script&gt;
        internal file
        &lt/script&gt;
         
      &lt;/head&gt;
      &lt;body&gt;
        &lt;h1&gt;JavaScript Fundamentals – Part 1&lt;/h1&gt;
    
        /* External File JS */
        &lt;script src="script.js"&gt;&lt;/script&gt;
    
      &lt;/body&gt;
    &lt;/html&gt;
`,

  //⭐Code CSS⭐

  `
body {
  height: 100vh;
  display: flex;
  align-items: center;
  background: linear-gradient(to top left, #28b487, #7dd56f);
}
h1 {
  font-family: sans-serif;
  font-size: 50px;
  line-height: 1.3;
  width: 100%;
  padding: 30px;
  text-align: center;
  color: white;
}
`,

  //⭐Code JavaScript⭐

  `
// Example of the Var
if(2==2){
  var name = 'Abdelrahman';
  console.log(name); // in Side Scope
}
  console.log(name); // Out Side Scope

// Let And Const == Block-Scoped

// Example of the let
if(2==2){
  let name = 'Abdelrahman';
  name = 'Mohamed'; // >> You can change the name let
  console.log(name); // in Side Scope
}
  console.log(name); // Out Side Scope (Not Working)


// Example of the const
if(2==2){
  const name = 'Abdelrahman';
  name = 'Mohamed'; // Error >> You cannot change the name Const
  console.log(name); // in Side Scope
}
  console.log(name); // Out Side Scope (Not Working)
`,
  // Full Description

  "⭐⭐لا يوجد⭐⭐"
);

//////////////////////////////////

// Add new Title List & Add New Section Based on (Nubmer)
changeContent(4, "topic 4", "ul-name");

// Add new Topic Content ⭐⭐

contents(
  // ⭐name_Topic = section_topic.insertAdjacentHTML("afterbegin", ➡️name_topic⬅️);

  "FundamentalsP1_4",

  // ⭐html_Section = const section_topic = document.querySelector(➡️html_Section⬅️);

  "section__-4",
  // ⭐Title

  "الفرعية رقم اثنين",

  // ⭐Content⭐

  `
  وصف
`,
  // ⭐Code HTML⭐

  `
&lt;!DOCTYPE html&gt;
    &lt;html lang="en"&gt;
      &lt;head&gt;
        &lt;meta charset="UTF-8" /&gt;
        &lt;meta name="viewport" content="width=device-width, initial-scale=1.0" /&gt;
        &lt;meta http-equiv="X-UA-Compatible" content="ie=edge" /&gt;
        &lt;link rel="stylesheet" href="style.css"/&gt;
        &lt;title&gt;JavaScript Fundamentals – Part 1&lt;/title&gt;
        &lt;script&gt;
        internal file
        &lt/script&gt;
         
      &lt;/head&gt;
      &lt;body&gt;
        &lt;h1&gt;JavaScript Fundamentals – Part 1&lt;/h1&gt;
    
        /* External File JS */
        &lt;script src="script.js"&gt;&lt;/script&gt;
    
      &lt;/body&gt;
    &lt;/html&gt;
`,

  //⭐Code CSS⭐

  `
body {
  height: 100vh;
  display: flex;
  align-items: center;
  background: linear-gradient(to top left, #28b487, #7dd56f);
}
h1 {
  font-family: sans-serif;
  font-size: 50px;
  line-height: 1.3;
  width: 100%;
  padding: 30px;
  text-align: center;
  color: white;
}
`,

  //⭐Code JavaScript⭐

  `
// Example of the Var
if(2==2){
  var name = 'Abdelrahman';
  console.log(name); // in Side Scope
}
  console.log(name); // Out Side Scope

// Let And Const == Block-Scoped

// Example of the let
if(2==2){
  let name = 'Abdelrahman';
  name = 'Mohamed'; // >> You can change the name let
  console.log(name); // in Side Scope
}
  console.log(name); // Out Side Scope (Not Working)


// Example of the const
if(2==2){
  const name = 'Abdelrahman';
  name = 'Mohamed'; // Error >> You cannot change the name Const
  console.log(name); // in Side Scope
}
  console.log(name); // Out Side Scope (Not Working)
`,
  // Full Description

  "⭐⭐لا يوجد⭐⭐"
);
