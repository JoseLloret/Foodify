// ────────────────────██████──────────
// ──────────────────██▓▓▓▓▓▓██────────
// ────────────────██▓▓▓▓▒▒▒▒██────────
// ────────────────██▓▓▒▒▒▒▒▒██────────
// ──────────────██▓▓▓▓▒▒▒▒██──────────
// ──────────────██▓▓▒▒▒▒▒▒██──────────
// ────────────██▓▓▓▓▒▒▒▒▒▒██──────────
// ────────────████▒▒████▒▒██──────────
// ────────────██▓▓▒▒▒▒▒▒▒▒██──────────
// ──────────██────▒▒────▒▒██──────────
// ──────────████──▒▒██──▒▒██──────────
// ──────────██────▒▒────▒▒██──────────
// ──────────██▒▒▒▒▒▒▒▒▒▒▒▒██──────────
// ──────────████████████▒▒▒▒██────────
// ────────██▓▓▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒██──────
// ──────██▓▓▓▓▒▒▒▒▒▒▒▒▒▒▒▒▒▒▓▓▒▒██────
// ────██▓▓▓▓▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▓▓▒▒▒▒██──
// ──██▓▓▓▓▓▓▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▓▓▒▒▒▒██
// ██▓▓▒▒▓▓▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▓▓▒▒▒▒██
// ██▓▓▒▒▓▓▒▒▒▒▒▒▓▓▓▓▒▒▒▒▒▒▒▒▒▒▓▓▓▓▒▒██
// ██▓▓▓▓▓▓▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▓▓▓▓██
// ──████▐▌▓▓▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▐▌▐▌████──
// ────██▐▌▐▌▌▌▌▌▌▌▌▌▐▌▐▌▐▌▐▌▌▌▐▌██────
// ────██▌▌▐▌▐▌▌▌▐▌▌▌▌▌▐▌▌▌▌▌▌▌▌▌██────
// ──────██▌▌▐▌▐▌▐▌▐▌▐▌▐▌▐▌▌▌▌▌██──────
// ──────██▐▌▐▌▐▌████████▐▌▌▌▌▌██──────
// ────────██▒▒██────────██▒▒██────────
// ────────██████────────██████────────
import {NextFunction, Request, Response} from 'express'
import app from './app'
import "dotenv/config";
// import Plate from './models/index'
require('./db');
    
// app.listen(4200, ()=>{
//     console.log("listening port 4200")
// }) 
app.listen(app.get("port"),()=>{
    console.log(`listen on port ${app.get("port")}`)
})