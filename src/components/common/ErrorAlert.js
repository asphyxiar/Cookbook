import React from 'react';
import {Alert} from 'react-bootstrap'

export function ErrorAlert() {
  return (
    <Alert variant="danger">
      <Alert.Heading>
        Whoops, an error occured while loading the data
         </Alert.Heading>
    </Alert>
  )
}
