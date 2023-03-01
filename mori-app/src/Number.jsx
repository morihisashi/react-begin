import { React, useEffect } from 'react';

export function Number(props){
    console.log(props.title);

    const data = props.game;
    const row1 = [data['11'], data['21'], data['31'], data['41'], data['51'], data['61'], data['71'], data['81'], data['91']];
    const row2 = [data['12'], data['22'], data['32'], data['42'], data['52'], data['62'], data['72'], data['82'], data['92']];
    const row3 = [data['13'], data['23'], data['33'], data['43'], data['53'], data['63'], data['73'], data['83'], data['93']];
    const row4 = [data['14'], data['24'], data['34'], data['44'], data['54'], data['64'], data['74'], data['84'], data['94']];
    const row5 = [data['15'], data['25'], data['35'], data['45'], data['55'], data['65'], data['75'], data['85'], data['95']];
    const row6 = [data['16'], data['26'], data['36'], data['46'], data['56'], data['66'], data['76'], data['86'], data['96']];
    const row7 = [data['17'], data['27'], data['37'], data['47'], data['57'], data['67'], data['77'], data['87'], data['97']];
    const row8 = [data['18'], data['28'], data['38'], data['48'], data['58'], data['68'], data['78'], data['88'], data['98']];
    const row9 = [data['19'], data['29'], data['39'], data['49'], data['59'], data['69'], data['79'], data['89'], data['99']];

    const line1 = [data['11'], data['12'], data['13'], data['14'], data['15'], data['16'], data['17'], data['18'], data['19']];
    const line2 = [data['21'], data['22'], data['23'], data['24'], data['25'], data['26'], data['27'], data['28'], data['29']];
    const line3 = [data['31'], data['32'], data['33'], data['34'], data['35'], data['36'], data['37'], data['38'], data['39']];
    const line4 = [data['41'], data['42'], data['43'], data['44'], data['45'], data['46'], data['47'], data['48'], data['49']];
    const line5 = [data['51'], data['52'], data['53'], data['54'], data['55'], data['56'], data['57'], data['58'], data['59']];
    const line6 = [data['61'], data['62'], data['63'], data['64'], data['65'], data['66'], data['67'], data['68'], data['69']];
    const line7 = [data['71'], data['72'], data['73'], data['74'], data['75'], data['76'], data['77'], data['78'], data['79']];
    const line8 = [data['81'], data['82'], data['83'], data['84'], data['85'], data['86'], data['87'], data['88'], data['89']];
    const line9 = [data['91'], data['92'], data['93'], data['94'], data['95'], data['96'], data['97'], data['98'], data['99']];
    useEffect(() => {
        console.log(props.title);
    },[])
    
    return(
        <>
        
        </>
    );
}