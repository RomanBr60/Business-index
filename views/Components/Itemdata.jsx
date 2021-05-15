import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route, useParams, useRouteMatch} from "react-router-dom";
import { Document, Head, Main } from "@react-ssr/express";
import Item from "./Item";
import "../../styles/style.css";

export default function Itemdata(props) {
  return (
    <React.Fragment>
      <Head>
        <meta charset="utf-8" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" />
        <meta name="viewport" content="width=device-width" />
        <meta name="generator" content="slidify" />
        <meta name="google" content="notranslate" />
        <meta name="robots" content="follow, index" />
        <link rel="canonical" href="https://romanbr87.github.io/index/index.html" />

        <meta name="description" content={props.data.gsx$desc.$t + props.data.gsx$desc2.$t} />
        <meta name="author" content="https://www.facebook.com/RonenBr60/" />

        <meta property="og:description" content={props.data.gsx$desc.$t + props.data.gsx$desc2.$t} />
        <meta property="og:url" content="https://romanbr87.github.io/index/index.html" />
        <meta property="og:title" content={props.data.gsx$name.$t} />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="אינדקס עסקים" />
        <meta property="og:image" content={props.data.gsx$logo.$t} />

        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.css" />
        <title>{props.data.gsx$name.$t}</title>
      </Head>
      <nav className="navbar navbar-inverse">
          <div className="container-fluid navbar-right" style={{ direction: 'ltr'}}>
              <ul className="nav navbar-nav">
                      <li className="active"><a href="#">Link <span className="sr-only">(current)</span></a></li>
                      <li><a href="/">Home</a></li>
              </ul>
              <div className="navbar-header">
                <a className="navbar-brand" href="/">
                  <i class="fa fa-home active" style={{ border: 'none'}}></i>
                </a>
            </div>
          </div>
      </nav>

      <div className="container" style={{ padding: '0', textAlign: 'right', direction: 'rtl' }}>
          <Item className="col-lg-offset-4 col-md-offset-4" data={props.data } ua={props.ua} isLinkable={false}/>
      </div>
    </React.Fragment>
  );
}
