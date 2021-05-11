import React from 'react';
import {
  Document,
  Head,
  Main,
} from '@react-ssr/express';
import ScriptTag from 'react-script-tag';


export default class extends Document {
  render() {
    return (
      <html dir="rtl" lang="he">
        <Head>

            <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css" />
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.css" />
            <title>אינקס עסקים</title>
        </Head>
        <body>
          <Main />
          <ScriptTag isHydrating={false} type="text/javascript" src="https://code.jquery.com/jquery-1.12.4.min.js" />
          <ScriptTag isHydrating={false} type="text/javascript" src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js"></ScriptTag>
          <ScriptTag isHydrating={false} type="text/javascript" src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js" />
        </body>
      </html>
    );
  }
};
