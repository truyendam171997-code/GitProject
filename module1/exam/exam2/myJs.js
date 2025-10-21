function countUpperChar( strings){
    let coutn = 0;
    for( let i = 0 ; i < strings.length; i++ ){
        if (strings[i] === strings[i].toUpperCase() && strings[i] !== strings[i].toLowerCase() ){
            coutn++;
        }
    }
    if (coutn === 0){
        document.write("The Strings is not contain upper char");
    }
    else {
        document.write("số ký tự in hoa là: "+ coutn);
    }
    document.write("<br>");
}

countUpperChar( " 12345P");
countUpperChar( " 12345");
countUpperChar( " 1aaa");
countUpperChar( " le Truyen Dam");