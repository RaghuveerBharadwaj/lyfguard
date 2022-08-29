import axios from "axios";

const axiosFetch = axios.create({
  baseURL: "http://localhost:8080"
});

axiosFetch.defaults.headers["x-access-token"] = localStorage.getItem("token")
// "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MmUzODBlNGY5MGQ0Mzc2ZjlkNjg2YTUiLCJuYW1lIjoiUmFnaHV2ZWVyIiwiZW1haWwiOiJyYWdodXZlZXJAZ21haWwuY29tIiwiYXZhdGFyIjoiUmFnaHV2ZWVyIiwicGhvbmUiOjEyMzQ1Njc4OTAsImJsb29kX2dyb3VwIjoiTyt2ZSIsInJvbGUiOiJhZG1pbiIsImFkZHJlc3MiOiJSYWdodXZlZXIiLCJzdGF0dXMiOjEsImlhdCI6MTY1OTA4MDM4Mn0.DaxkpLQPrRlNXFLCGHqE6kKolX-C-BAzfSVeUm_QAQc"

export default axiosFetch
