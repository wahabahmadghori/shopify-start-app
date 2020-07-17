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
const Query_SCRIPTING = gql`
query{
  scriptTags(first:5){
    edges{
      node {
        id
        src
        displayScope
      }
    }
  }
}
`

const ScriptPage = () => {
  console.log('Hello from script page')
  const {loading,error,data} = useQuery(Query_SCRIPTING)
  if(loading) return <div>loading....</div>
  if(error) return <div>{error.message}</div>
  console.log(data)
    return (
        <div>
            Hello from Script Page
        </div>
    )
}

export default ScriptPage
