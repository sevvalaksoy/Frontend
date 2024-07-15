import {render} from "@testing-library/react";
import { test } from '@jest/globals'
import App from "./App";
import {BrowserRouter} from "react-router-dom";
import '@testing-library/jest-dom';


test("uygulama başarı ile başlatıldı", ()=> {
    render( 
        <BrowserRouter>
            <App/>
        </BrowserRouter>
    )
})