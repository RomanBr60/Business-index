import React, { useState, useEffect } from 'react';
import Item from "./Item"
import "../../styles/style.css";

export default function List(props) {

    const UI = (attr) => {
        return (
            <div className="row ItemRow">
                {
                  (props.filterFunc(attr, props.list).length != 0) ? 
                  <div className="page">
                      <h1 className="pageTitle page-head" style={{marginRight: "1.5%",   textDecoration: "underline"}}>{attr}</h1>
                      {
                        props.filterFunc(attr, props.list).map((item, i) => <Item key={i} className="Item" data={item} ua={props.ua}></Item>)
                      }
                  </div> : ''
                }
            </div>
        )
    }

    return (
        <div>
            {
               props.filterBy.map(attr => UI(attr))
            }
        </div>
    )
}
