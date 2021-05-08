import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route, useParams, useRouteMatch } from "react-router-dom";
import { Document, Head, Main } from "@react-ssr/express";
import window from 'global'
import '../../styles/App.css';
import '../../styles/style.css';
import '../../styles/bootstrap-social.css'

export default function Item(props) {

    const whatsappURL = () => {
        return (props.ua.match(/Android/i)
            || props.ua.match(/webOS/i)
            || props.ua.match(/iPhone/i)
            || props.ua.match(/iPad/i)
            || props.ua.match(/iPod/i)
            || props.ua.match(/BlackBerry/i)
            || props.ua.match(/Windows Phone/i)
        ) ? 'api' : 'web';
    }

    const fullAddress = () => {
        return props.data.gsx$address.$t + ", " + props.data.gsx$city.$t;
    }

    //console.log(props.data)

    return (
        <div className={"col-lg-4 col-md-4 col-xs-12" + (props.className == '' ? '' : props.className) }>
            <div className="panel panel-info">
                <div className="panel-heading">
                    {
                        (props.isLinkable) ? 
                        <a href={"/" + props.data.gsx$link.$t} ><h3 className="title text-center">{props.data.gsx$name.$t}</h3></a>:
                        <h3 className="title text-center">{props.data.gsx$name.$t}</h3>
                    }
                </div>
                <div className="panel-body">
                    <div className="has-success has-feedback" style={{ height: '200px', textAlign: "center" }}>
                        <img className="logo" src={props.data.gsx$logo.$t} style={{ width: props.data.gsx$logowidth.$t + "px", height: props.data.gsx$logoheight.$t + "px" }} />
                    </div>
                    <h1 className="text caption" style={{ fontSize: "medium", width: "100%" }}>{props.data.gsx$desc.$t + props.data.gsx$desc2.$t}</h1>
                    
                    <div className="has-success has-feedback row" style={{ height: '46px' }}>
                        <a title="אתר" href={(props.data.gsx$website.$t == '') ? '' : props.data.gsx$website.$t} className="col-lg-3 col-md-3 col-xs-12 btn btn-social-icon btn-lg btn-facebook">
                            <span className="fa fa-fw fa-globe"></span>
                        </a>
                        <a title="דף פייסבוק" href={props.data.gsx$facebook.$t == '' ? '' : props.data.gsx$facebook.$t} className="col-lg-3 col-md-3 col-xs-12 btn btn-social-icon btn-lg btn-facebook">
                            <span className="fa fa-fw fa-facebook"></span>
                        </a>
                        <a title="דף אינסטגרם" href={props.data.gsx$instagram.$t == '' ? '' : props.data.gsx$instagram.$t} className="col-lg-3 col-md-3 col-xs-12 btn btn-social-icon btn-lg btn-instagram">
                            <span className="fa fa-fw fa-instagram"></span>
                        </a>
                        <a title="ווטסאפ" href={props.data.gsx$whatsapp.$t == '' ? '' : "https://" + whatsappURL() + ".whatsapp.com/send?phone=+972" + props.data.gsx$whatsapp.$t} className="col-lg-3 col-md-3 col-xs-12 btn btn-social-icon btn-lg btn-instagram" style={{ backgroundColor: "#06d755" }}>
                            <span className="fa fa-fw fa-whatsapp"></span>
                        </a>
                    </div>

                    <div className="properties" style={{ direction: "ltr", maxHeight: '260px', minHeight:'200px', height: '260px', backgroundColor: 'none' }}>
                        <hr />
                        <a title="טלפון" href={props.data.gsx$telephone.$t == '' ? '' : "tel:0" + props.data.gsx$telephone.$t.split(' ')[0]}>
                            <span>{(props.data.gsx$telephone.$t == '') ? '' : "0" + props.data.gsx$telephone.$t}</span><i className="fa fa-fw fa-phone"></i></a><hr />

                        <a title="פלאפון" href={props.data.gsx$mobilephone.$t == '' ? '' : "tel:0" + props.data.gsx$mobilephone.$t.split(' ')[0]}>
                            <span>{(props.data.gsx$mobilephone.$t == '') ? '' : "0" + props.data.gsx$mobilephone.$t}</span><i className="fa fa-fw fa-mobile"></i></a><hr />

                        <a title="פלאפון" href={props.data.gsx$mobilephone2.$t == '' ? '' : "tel:0" + props.data.gsx$mobilephone2.$t.split(' ')[0]}>
                            <span>{(props.data.gsx$mobilephone2.$t == '') ? '' : "0" + props.data.gsx$mobilephone2.$t}</span><i className="fa fa-fw fa-mobile"></i></a><hr />


                        <a title="כתובת" href={(props.data.gsx$address.$t == '') ? '' : 'http://maps.google.com/maps?q=' + encodeURIComponent(fullAddress().trim().replace(/\r?\n/, ',').replace(/\s+/g, ' ')) }><span>{(props.data.gsx$address.$t == '') ? '' : fullAddress() }</span><i className="fa fa-fw fa-map-marker"></i></a><hr />
                        <a title="אימייל" href={props.data.gsx$email.$t == '' ? '' : "mailto:" + props.data.gsx$email.$t}><span>{props.data.gsx$email.$t == '' ? '' : props.data.gsx$email.$t}</span><i className="fa fa-fw fa-envelope-o"></i></a><hr />

                        {
                            props.data.gsx$time.$t.split("@@").map((e, i) => <a key={i} className="time" href="" title="שעות פעילות"><span style={{ textAlign: 'left' }}>{e}</span><i className="fa fa-fw fa-clock-o"></i><hr /></a>)
                        }
                    </div>

                </div>
            </div>
        </div>
    )
}
