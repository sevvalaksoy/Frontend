import {render} from "@testing-library/react";
import App from "./App";
import {BrowserRouter} from "react-router-dom";


test("uygulama başarı ile başlatıldı", ()=> {
    render( 
        <BrowserRouter>
            <App/>
        </BrowserRouter>
    )
})