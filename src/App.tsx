import React, {useState} from 'react';
import './App.css';
import {Accordion} from './components/Accordion/Accordion';
import {Rating, RatingValueType} from "./components/Rating/Rating";
import {UncontrolledRating} from "./components/UncontrolledRating/UncontrolledRating";
import {OnOff} from "./components/OnOff/OnOff";
import UncontrolledOnOff from './components/UncontrolledOnOff/UncontrolledOnOff';
import UncontrolledAccordion from "./components/UncontrolledAccordion/UncontrolledAccordion";

function App() {
    console.log("App rendering")

    let [raitingValue, setRaitingValue] = useState<RatingValueType>(0);
    let [accordionCollapsed, setAccordionCollapsed] = useState<boolean>(false);
    let [switcOn, setSwitcOn] = useState<boolean>(false);

    return (
        <div className={'App'}>

            <Rating value={raitingValue}
                    onClick={setRaitingValue}/>

            <UncontrolledRating/>

            <Accordion titleValue={"Menu"}
                       collapsed={accordionCollapsed}
                       onChange={() => {setAccordionCollapsed(!accordionCollapsed)}}/>

            {/*<OnOff on={switcOn} onChange={(on)=>{setSwitcOn(on)}}/>*/}
            {/*<OnOff on={switcOn} onChange={setSwitcOn}/>*/}

            <UncontrolledOnOff onChange={setSwitcOn}/> {switcOn.toString()}

            <UncontrolledAccordion titleValue={'Blabla'}/>
{/*
            <Rating value={3}/>
            <Accordion titleValue={"Menu"} collapsed={false}/>

            <UncontrolledOnOff />
            <UncontrolledOnOff />

            <UncontrolledRating value={1}/>
            <UncontrolledRating value={2}/>
            <UncontrolledRating value={3}/>
            <UncontrolledRating value={4}/>
            <UncontrolledRating value={5}/>
            */}

        </div>
    );
}

type PageTitlePropsType = {
    title: string
}

function PageTitle(props: PageTitlePropsType) {
    console.log("PageTitle rendering")
    return <h1>{props.title}</h1>
}


export default App;
