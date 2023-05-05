import { useState, useEffect } from 'react';
import { Grid, Card,CardContent, Typography,Container, FormControl, Tab, Tabs, CircularProgress, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atomDark } from 'react-syntax-highlighter/dist/esm/styles/prism';

const useStyles = makeStyles((theme) => ({
  predictContainer: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
  },
  cardContainer: {
    backgroundColor: '#E0E0E0',
    width: '100%',
  },
  cardContent: {
    padding: theme.spacing(3),
    textAlign: 'center',
  },
  resultCard: {
    width: '100%',
    marginTop: theme.spacing(2),
  },
  resultCardContent: {
    padding: theme.spacing(2),
  },
  predictButton: {
    marginTop: theme.spacing(2),
  },
  predictProgress: {
    marginRight: theme.spacing(1),
  },
  jsonContainer: {
    height: '100%',
    overflow: 'auto',
    padding: theme.spacing(2),
    backgroundColor: '#F5F5F5',
    marginTop: theme.spacing(2),
    fontFamily: 'monospace',
    whiteSpace: 'pre-wrap',
  },
}));

const Predictor = (props) => {

    const classes = useStyles();
    
    const [selectedPatient, setSelectedPatient] = useState(null);
    const [baselineResult, setBaselineResult] = useState(null);
    const [nonBaselineResult, setNonBaselineResult] = useState(null);
    const [actualResult, setActualResult] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [selectedTab, setSelectedTab] = useState(0);
    const [isCheckingIcuStays, setIsCheckingIcuStays] = useState(false);
    const [isCheckingDiagnoses, setIsCheckingDiagnoses] = useState(false);
    const [isCheckingProcedureEvents, setIsCheckingProcedureEvents] = useState(false);
    const [isCheckingLabItems, setIsCheckingLabItems] = useState(false);
    const [riskScore, setRiskScore] = useState(null);
    const [isShowingRiskScore, setIsShowingRiskScore] = useState(false);
    

    const handleTabChange = (event, newValue) => {
      setSelectedTab(newValue);
    };

    const jsonData = `{
      "resourceType": "Patient",
      "id": "2955c958-192a-50eb-b59d-23a29d7d374e",
      "meta": {
          "versionId": "1",
          "lastUpdated": "2022-05-24T16:43:25.267-04:00",
          "source": "#gUq1o5ReRBfW3jZR",
          "profile": [
              "http://fhir.mimic.mit.edu/StructureDefinition/mimic-patient"
          ]
      },
      "text": {
          "status": "generated",
          "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\"><div class=\"hapiHeaderText\"><b>PATIENT_10016742 </b></div><table class=\"hapiPropertyTable\"><tbody><tr><td>Identifier</td><td>10016742</td></tr><tr><td>Date of birth</td><td><span>03 July 2120</span></td></tr></tbody></table></div>"
      },
      "extension": [
          {
              "url": "http://hl7.org/fhir/us/core/StructureDefinition/us-core-race",
              "extension": [
                  {
                      "url": "ombCategory",
                      "valueCoding": {
                          "system": "urn:oid:2.16.840.1.113883.6.238",
                          "code": "2054-5",
                          "display": " Black or African American"
                      }
                  },
                  {
                      "url": "text",
                      "valueString": " Black or African American"
                  }
              ]
          },
          {
              "url": "http://hl7.org/fhir/us/core/StructureDefinition/us-core-ethnicity",
              "extension": [
                  {
                      "url": "ombCategory",
                      "valueCoding": {
                          "system": "urn:oid:2.16.840.1.113883.6.238",
                          "code": "2186-5",
                          "display": "Not Hispanic or Latino"
                      }
                  },
                  {
                      "url": "text",
                      "valueString": "Not Hispanic or Latino"
                  }
              ]
          },
          {
              "url": "http://hl7.org/fhir/us/core/StructureDefinition/us-core-birthsex",
              "valueCode": "F"
          }
      ],
      "identifier": [
          {
              "system": "http://fhir.mimic.mit.edu/identifier/patient",
              "value": "10016742"
          }
      ],
      "name": [
          {
              "use": "official",
              "family": "Patient_10016742"
          }
      ],
      "gender": "female",
      "birthDate": "2120-07-03",
      "maritalStatus": {
          "coding": [
              {
                  "system": "http://terminology.hl7.org/CodeSystem/v3-MaritalStatus",
                  "code": "S"
              }
          ]
      },
      "communication": [
          {
              "language": {
                  "coding": [
                      {
                          "system": "urn:ietf:bcp:47",
                          "code": "en"
                      }
                  ]
              }
          }
      ],
      "managingOrganization": {
          "reference": "Organization/ee172322-118b-5716-abbc-18e4c5437e15"
      }
  }`
   
    useEffect(() => {
        setSelectedPatient(props.selectedPatient);
        setActualResult(null);
        setBaselineResult(null);
        setNonBaselineResult(null);
      }, [props.selectedPatient]);

  // handle baseline model prediction
  const handlePrediction = async () => {
    setIsLoading(true);
  
    const delay = (ms) => new Promise((res) => setTimeout(res, ms));
  
    await delay(2000);
    setIsCheckingIcuStays(true);
  
    await delay(2000);
    setIsCheckingDiagnoses(true);
    setIsCheckingIcuStays(false)
  
    await delay(2000);
    setIsCheckingProcedureEvents(true);
    setIsCheckingDiagnoses(false);
  
    await delay(2000);
    setIsCheckingLabItems(true);
    setIsCheckingProcedureEvents(false);
  
    await delay(2000);
    setIsCheckingIcuStays(false);
    setIsCheckingDiagnoses(false);
    setIsCheckingProcedureEvents(false);
    setIsCheckingLabItems(false);
    setRiskScore('0.77');
    setIsShowingRiskScore(true);
  
    setIsLoading(false);
  };
  

  
  return (
    <div className={classes.predictContainer}>
        <Container>
        <Grid container spacing={7} justifyContent="center">
        {selectedPatient && (
           <Grid container spacing={3}>
            <Grid item xs={12} md={12}>
            <Card variant="outlined" style={{ backgroundColor: '#E0E0E0', width: '100%' }} className={classes.cardContainer}>
            <CardContent className={classes.cardContent}>
              <Tabs
                value={selectedTab}
                onChange={handleTabChange}
                indicatorColor="primary"
              >
                <Tab label="Information" />
                <Tab label="FHIR Json View" />
              </Tabs>
              {selectedTab === 0 && (
                <div>
                  <Typography variant="h5" gutterBottom>
                    {selectedPatient.name}
                  </Typography>
                  <Typography variant="subtitle1" gutterBottom>
                    {`Age: ${selectedPatient.age}`}
                  </Typography>
                  <Typography variant="subtitle1" gutterBottom>
                    {`Gender: ${selectedPatient.gender}`}
                  </Typography>
                  <Typography variant="subtitle1" gutterBottom>
                    {`Ethnicity: ${selectedPatient.ethnicity}`}
                  </Typography>
                  <div style={{ marginTop: '24px' }}>
                    <Button variant="contained" color="primary" onClick={handlePrediction}>
                      {isLoading ? <CircularProgress size={24} /> : "Predict Risk to Patient"}
                    </Button>
                </div>
                </div>
                
              )}
              {selectedTab === 1 && (
                <div className={classes.jsonContainer}>
                  <SyntaxHighlighter language="json" style={atomDark}>
                    {jsonData}
                  </SyntaxHighlighter>
                </div>
              )}
            </CardContent>
            </Card>
            </Grid>
            {!isShowingRiskScore && (
            <>
              {isCheckingIcuStays && (
                <Typography variant="h5" gutterBottom>
                  Checking icuStays...
                </Typography>
              )}
              <br></br>
              {isCheckingDiagnoses && (
                <Typography variant="h5" gutterBottom>
                  Checking diagnoses...
                </Typography>
              )}
              <br></br>
              {isCheckingProcedureEvents && (
                <Typography variant="h5" gutterBottom>
                  Checking procedureEvents...
                </Typography>
              )}
              <br></br>
              {isCheckingLabItems && (
                <Typography variant="h5" gutterBottom>
                  Checking labItems...
                </Typography>
              )}
              <br></br>
            </>
          )}
            {isShowingRiskScore && (
              <Typography variant="subtitle1" gutterBottom>
                <strong>Predicted risk of Readmission:</strong> {riskScore} (<strong>High</strong>)
                <ul>
                  The following data was integral in this prediction: 
                  <li><strong>Frequency of ICU stays:</strong> Moderate</li>
                  <li><strong>Number of past diagnoses:</strong> 10 ICD codes, 5 of which classify as high risk</li>
                  <li><strong>Number of procedures:</strong> 44 (High)</li>
                  <li><strong>Lab reports:</strong> 3 out-of-range readings (Low)</li>
                </ul>
              </Typography>
            )}
             </Grid>
            )}
        </Grid>
        </Container>
    
    <Container>
        {/* <Audit></Audit> */}
    </Container>
    </div>
    );
}



export default Predictor;