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
    height: '300px',
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

    const handleTabChange = (event, newValue) => {
      setSelectedTab(newValue);
    };

    const jsonData = `{
      "resourceType": "Patient",
      "id": "0a8eebfd-a352-522e-89f0-1d4a13abdebc",
      "meta": {
          "versionId": "1",
          "lastUpdated": "2022-05-24T15:14:55.471-04:00",
          "source": "#V0XlSRZTewCRRSjY",
          "profile": [
              "http://fhir.mimic.mit.edu/StructureDefinition/mimic-patient"
          ]
      },
      "text": {
          "status": "generated",
          "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\"><div class=\"hapiHeaderText\"><b>PATIENT_10000032 </b></div><table class=\"hapiPropertyTable\"><tbody><tr><td>Identifier</td><td>10000032</td></tr><tr><td>Date of birth</td><td><span>06 May 2128</span></td></tr></tbody></table></div>"
      },
      "extension": [
          {
              "url": "http://hl7.org/fhir/us/core/StructureDefinition/us-core-race",
              "extension": [
                  {
                      "url": "ombCategory",
                      "valueCoding": {
                          "system": "urn:oid:2.16.840.1.113883.6.238",
                          "code": "2106-3",
                          "display": "White"
                      }
                  },
                  {
                      "url": "text",
                      "valueString": "White"
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
              "value": "10000032"
          }
      ],
      "name": [
          {
              "use": "official",
              "family": "Patient_10000032"
          }
      ],
      "gender": "female",
      "birthDate": "2128-05-06",
      "deceasedDateTime": "2180-09-09",
      "maritalStatus": {
          "coding": [
              {
                  "system": "http://terminology.hl7.org/CodeSystem/v3-MaritalStatus",
                  "code": "W"
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
    await delay(3000);
    // const response = await fetch(`https://your-api.com/predictions/baseline/${selectedPatient}`);
    // const data = await response.json();
    if (selectedPatient.id === 1) {
        setBaselineResult('Low')
    }
    else if (selectedPatient.id === 2) {
        setBaselineResult('High')
    }
    else if (selectedPatient.id === 3) {
        setBaselineResult('Low')
    }
    else if (selectedPatient.id === 4) {
        setBaselineResult('High')
    }
    if (selectedPatient.id === 1) {
        setNonBaselineResult('High')
    }
    else if (selectedPatient.id === 2) {
        setNonBaselineResult('Low')
    }
    else if (selectedPatient.id === 3) {
        setNonBaselineResult('High')
    }
    else if (selectedPatient.id === 4) {
        setNonBaselineResult('Low')
    }
    if (selectedPatient.id === 1) {
        setActualResult('High')
    }
    else if (selectedPatient.id === 2) {
        setActualResult('Low')
    }
    else if (selectedPatient.id === 3) {
        setActualResult('Low')
    }
    else if (selectedPatient.id === 4) {
        setActualResult('High')
    }
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
                </div>
              )}
              {selectedTab === 1 && (
                <div className={classes.jsonContainer}>
                  <SyntaxHighlighter language="json" style={atomDark}>
                    {jsonData}
                  </SyntaxHighlighter>
                </div>
              )}
              <div style={{ marginTop: '24px' }}>
                    <Button variant="contained" color="primary" onClick={handlePrediction}>
                      {isLoading ? <CircularProgress size={24} /> : "Predict Risk to Patient"}
                    </Button>
                </div>
            </CardContent>
            </Card>
            </Grid>
            {baselineResult && (
                 <Grid item xs={12} md={6}>
                 <Card
                   variant="outlined"
                   style={{ backgroundColor: baselineResult == 'Low' ? '#4CAF50' : '#FF5252', width: '100%' }}
                 >
                   <CardContent>
                     <Typography variant="h6">
                       Baseline Model Result: {baselineResult}
                     </Typography>
                   </CardContent>
                 </Card>
               </Grid>
             )}
            {nonBaselineResult && (
            <Grid item xs={12} md={6}>
            <Card
                variant="outlined"
                style={{ backgroundColor: nonBaselineResult == 'Low' ? '#4CAF50' : '#FF5252', width: '100%' }}
            >
                <CardContent>
                <Typography variant="h6">
                    FairPlay Model Result: {nonBaselineResult}
                </Typography>
                </CardContent>
            </Card>
            </Grid>
            )}
            {actualResult && (
                <Grid item xs={12} md={12} alignItems='center'>
                <Card
                  variant="outlined"
                  style={{ backgroundColor: actualResult == 'Low' ? '#4CAF50' : '#FF5252', width: '100%' }}
                >
                  <CardContent>
                    <Typography variant="h6" align="center">
                      Actual Result: {actualResult}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
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