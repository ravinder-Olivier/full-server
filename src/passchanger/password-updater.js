// Copyright 2023 and onwards Ravinder Olivier Singh
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
/* globals, server,client */

/**
 * @fileoverview Password updater selector
 * @author ravinder-Olivier@outlook.com (Ravinder Olivier Singh Dadiala)
 *
*/

import { findapikeys, apipathfinder, passwordarray } from "./functions";
import axios, { isCancel, AxiosError } from "axios";
import axiosfunc from "./axiosfunc";

export default async function therealchanger(grade){
  async function evenrealerchanger(grade, printer) {
    
    
    //uses axios to send put request
        var apikeys = findapikeys(grade,printer);
    const res = await axiosfunc
    console.log(res);
  }

  await evenrealerchanger(grade, 1);
  await evenrealerchanger(grade, 2);
  await evenrealerchanger(grade, 3);
  await evenrealerchanger(grade, 4);
  // will call for each printer
}