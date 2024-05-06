import { Box, Grid } from "@mui/material"
import { useEffect, useState } from "react";
import { API_CALL_DUMMY_DATA } from '../../utils/API';


export interface GoogleFormsI {
  timestamp:       Date;
  respondentEmail: string;
  itemResponses:   ItemResponse[];
}

export interface ItemResponse {
  question: string;
  answer:   string[] | string;
}

function GoogleFormsDashboardIntegration() {

  const [pendingForms, setPendingForms] = useState<GoogleFormsI[] | any>();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await new Promise((res, rej) => {
         setTimeout(() => res(API_CALL_DUMMY_DATA), 2000)
        })

        return response;
      } catch (err) {
        console.log("error.unknown");
      }
    }
    
    const fetchDataAndSetState = async () => {
      try {
        const response = await fetchData();
        setPendingForms(response);
      } catch (error) {
        console.error(error);
      }
    };
    fetchDataAndSetState();
  }, []);

  // const renderCards = pendingForms?.map((form: GoogleFormsI) =><Grid key={form.respondentEmail} item xs={3}><MediaCard timestamp={form.timestamp} respondentEmail={form.respondentEmail} itemResponses={form.itemResponses}   /> </Grid>)
  return (
    <Grid container spacing={2}>
      {/* {renderCards} */}
    </Grid>
  )
}

export default GoogleFormsDashboardIntegration