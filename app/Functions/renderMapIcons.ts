import { ResortMapIcons } from "../Types/types";



export default function mapIcons(icon: ResortMapIcons){
 
    if(icon === '.'){
        return "/textureWater.png";
    }
        
    if(icon === 'p'){
        return "/pool.png"
    }

    if(icon === '#'){
        return "/arrowCornerSquare.png"
    }
    if(icon === 'W'){
        return "/cabana.png"
    }
    if(icon === 'c'){
        return "/houseChimney.png"
    }

    

}