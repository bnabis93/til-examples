# React-todo-lists
- React에 익숙해지기 위한 tutorial
- OS : macOS Big Sur

## 환경세팅
1. Check node.js versions. 만약 설치 안되어있으면 설치하자. 
```
#If you use hombrew
#install homebrew
/usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"

#install nodejs
brew install node

#In the terminal (CLI), npm == node package manager
node -v 
npm --version
```  

2. Make react project using npx  
- npx는 npm(5.2.0 >)부터 npm을 좀 더 편하게 사용하기 위해 추가된 도구
- npx, node package runner
```
#npx {install package name} {project name} 
npx create-react-app todo-lists

cd todo-lists
npm start
```


