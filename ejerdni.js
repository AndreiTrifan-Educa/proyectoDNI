function validarDNI(dni){
suma=0;
for (let i = 0; i < dni.length-1; i++) {
    suma+=dni[i];
}
letraDNI=suma%23;
switch(letraDNI){
     case 0:
        letraDNI="T";
        break;
     case 1:
        letraDNI="R";
        break;
     case 2:
         letraDNI="W";
         break;
     case 3:
        letraDNI="A";
        break;
     case 4:
        letraDNI="G";
        break;
     case 5:
        letraDNI="M";
        break;
     case 6:
        letraDNI="Y";
        break;
     case 7:
        letraDNI="F";
        break;
     case 8:
         letraDNI="P";
         break;
     case 9:
        letraDNI="D";
        break;
     case 10:
        letraDNI="X";
        break;
     case 11:
        letraDNI="B";
        break;
     case 12:
        letraDNI="N";
        break;
     case 13:
        letraDNI="J";
        break;
     case 14:
         letraDNI="Z";
         break;
     case 15:
        letraDNI="S";
        break;
     case 16:
        letraDNI="Q";
        break;
     case 17:
        letraDNI="V";
        break;
     case 18:
        letraDNI="H";
        break;
     case 19:
         letraDNI="L";
         break;
     case 20:
        letraDNI="C";
        break;
     case 21:
        letraDNI="K";
        break;
     case 22:
        letraDNI="E";
        break;
}

    if(letraDNI==dni[8]){
      return "La letra está bien";
    }else{
      return "La letrá NO está bien";
    }
}
