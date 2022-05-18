# Node.js 라우터 테스트 프로그램 

# App.js(미들웨어 관리)
구현 모듈 : App.js에서 라우터 모듈을 불러옴<br>
var indexRouter = require("./routes/index");<br>


app.use(express.static(path.join(__dirname, "public")));<br>
// public 폴더 경로를 불러와서 express에서 접근할 수 있게 해줌 <br>
app.set("views", path.join(__dirname, "views"));<br>
app.set("view engine", "ejs");<br>
// Templete Engine을 ejs로 설정하고 ejs의 경로인 views를 설정 <br>

app.use("/", indexRouter);<br>
app.use("/hello", indexRouter);<br>
// 웹 브라우저에서 URL을 경로를 어떻게 입력하느냐에 따라서 각각 다른 사이트를 반환하는 코드<br>
// App.js에서는 단순히 라우터 파일을 불러올 뿐이고, 실질적으로 구분하는 것은 라우터 모듈인 index.js이다.<br>


# index.js
router.get("/", (req, res, next) => {<br>
  res.sendFile(path.join(__dirname, "..", "/public/index.html"));<br>
});
// html 파일을 불러올 때는 sendFile() 메서드를 써야한다.<br>
router.get("/hello", (req, res, next) => {<br>
  res.sendFile(path.join(__dirname, "..", "/public/Hello.html"));<br>
});<br>
// 이 파일도 마찬가지<br>
router.get("/test", (req, res, next) => {<br>
  res.render("test", { title: "ejs test" });<br>
});<br>
// ejs 파일을 불러올 때는 render() 메서드를 사용해야한다.<br>
// {title: "ejs test"}는 ejs 파일에서 사용할 객체를 담아놓은 것이다.<br>
module.exports = router;<br>

# 이 파일을 설치할 때는
1. 이 파일을 설치할 디렉터리(폴더)를 만드세요.
2. 해당 디렉터리에서 터미널을 열고 git init 명령어를 입력하고 엔터키를 누르세요.
3. 이 사이트의 리포지토리의 code 버튼을 누르고 https 탭에서 URL을 복사하세요. 복사 버튼을 눌러도 됨 
4. 그런 다음 터미널에 다시 돌아가서 git clone [복사한 레포지토리 주소 붙혀넣기] 한 다음 엔터키를 누르세요.
5. 그럼 폴더로 소스코드가 복사가 됩니다.
6. 해당 소스코드에는 node_modules(서버 실행에 필요한 패키지 파일)이 없기 때문에 반드시 터미널에 npm install 명령어를 입력하고 엔터를 눌려줘야 합니다.
7. 그런다음 npm start 명령어를 누르면 서버 실행이 됩니다.
