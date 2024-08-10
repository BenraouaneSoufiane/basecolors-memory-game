import { HexColorPicker } from "react-colorful";
import ConfettiExplosion from 'react-confetti-explosion';

import {useState} from 'react';
var c = '',c2 = '',c3 = '';


export default () => {
    const largeProps: ConfettiProps = {
        force: 0.8,
        duration: 9000,
        particleCount: 900,
        width: 3000,
        colors: ['#041E43', '#1471BF', '#5BB4DC', '#FC027B', '#66D805'],
      };
    const [step, setStep] = useState(0);
    const [color, setColor] = useState("#aabbcc");
    const [color2, setColor2] = useState("#aabbcc");
    const [color3, setColor3] = useState("#aabbcc");
    const [isExploding, setIsExploding] = useState(false);

    const handleOnchange = function(e){
        if( step == 0 ){
           setColor(e);
           setStep(step+1);
        }else if( step == 1 ){
           setColor2(e);
           setStep(step+1);
        }else if( step == 2 ){
           setColor3(e)
           setStep(step+1);
        }else if (step == 3){
            alert('Now the colors will reset!');
            c = color;
            c2 = color2;
            c3 = color3;
            setColor("#aabbcc");
            setColor2("#aabbcc");
            setColor3("#aabbcc");
            alert('Now choose them again!');

            setStep(step+1);

        }else if (step == 4){
            setColor(e);     
            setStep(step+1);
       
        }else if (step == 5){
            setColor2(e);            
            setStep(step+1);

        }else if (step == 6){
            setColor3(e);            
            setStep(step+1);
            setIsExploding(true)
        }        
    }


    return (
    <>{isExploding && <ConfettiExplosion {...largeProps} />}
        <div>
        
           <HexColorPicker style={{position: "relative",marginLeft:'auto',marginRight:'auto'}} color={color} onChange={handleOnchange} />
           <div className="colors mt-8" >
               <div className="first" style={{position: 'relative',width: '30%', height: '250px', backgroundColor: color, borderRadius: '10px', margin: '10px', display: 'inline-block'}}></div>
               <div className="second" style={{position: 'relative',width: '30%', height: '250px', backgroundColor: color2, borderRadius: '10px', margin: '10px', display: 'inline-block'}}></div>
               <div className="third" style={{position: 'relative',width: '30%', height: '250px', backgroundColor: color3, borderRadius: '10px', margin: '10px', display: 'inline-block'}}></div>
            </div>
            {isExploding && <h2 style={{fontSize:'25px',textAlign:'center',position:'relative',marginTop: '30px'}}>&#127881; &#129395; <a style={{color:c}}>{c}</a> against <a style={{color:color}}>{color}</a>, <a style={{color:c2}}>{c2}</a> against <a style={{color:color2}}>{color2}</a>, <a style={{color:c3}}>{c3}</a> against <a style={{color:color3}}>{color3}</a> &#129395; &#127881;</h2>}
        </div>
    </>

    )

}
