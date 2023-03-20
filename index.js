// Code your solution in this file!
let street=0;
let blocks=0;
let feet=0;
let street2=0;
let fare=0
let cannot = 'cannot travel that far'

function distanceFromHqInBlocks(street){
return Math.abs(42-street)
}
function distanceFromHqInFeet(street){
return distanceFromHqInBlocks(street)*264;
}
function distanceTravelledInFeet(street, street2){
return Math.abs(street-street2)*264
}

function calculatesFarePrice(street, street2){
    if (distanceTravelledInFeet(street, street2)<=400){
        return 0
    } else if (distanceTravelledInFeet(street, street2)>400 && distanceTravelledInFeet(street, street2)<=2000){
        return (distanceTravelledInFeet(street, street2)-400)*0.02
    } else if (distanceTravelledInFeet(street, street2)>2000 && distanceTravelledInFeet(street, street2)<=2500){
        return 25
    } else if(distanceTravelledInFeet(street, street2)>2500){
        return cannot
    }
}