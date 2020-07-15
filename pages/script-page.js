import React from 'react'
import gql from 'graphql-tag'
import {useQuery,useMutation} from '@apollo/react-hooks'

const CREATE_SCRIPT_TAG = gql`
mutation scriptTagCreate($input: ScriptTagInput!) {
    scriptTagCreate(input: $input) {
      scriptTag {
        id
      }
      userErrors {
        field
        message
      }
    }
  }
`

const ScriptPage = () => {
    return (
        <div>
            Hello from Script Page
        </div>
    )
}

export default ScriptPage
