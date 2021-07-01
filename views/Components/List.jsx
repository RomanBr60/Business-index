import React, { useState, useEffect } from 'react';
import Item from "./Item"
import "../../styles/style.css";

export default function List(props) {

    const UI = (attr) => 
        (props.filterFunc(attr, props.list).length != 0) ?
            <div className="row ItemRow" id={attr}>
                <h1 className="pageTitle" style={{margin: "1% 2% auto auto", textDecoration: "underline"}}>{attr}</h1>
                {
                    props.filterFunc(attr, props.list).map((item, i) => <Item key={i} data={item} ua={props.ua} isLinkable={false}
                    className="col-lg-4 col-md-4 col-sm-12 col-xs-12"></Item>)
                }
            </div> : '';

    return (
        <div>
            {
              (props.search !== '') ? <h1 className="pageTitle searchText">תוצאות החיפוש של "{ props.search }"</h1>: ''
            }
            {
               (props.filterBy == undefined) ?             
               <div className="row ItemRow">
                {
                    props.list.map((item, i) => <Item key={i} data={item} ua={props.ua} isLinkable={true}
                    className="col-lg-4 col-md-4 col-sm-12 col-xs-12"></Item> )
                } 
               </div> : props.filterBy.map(attr => UI(attr))
            }
        </div>
    )
}
