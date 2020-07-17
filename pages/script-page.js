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
const Query_SCRIPTTAGS = gql`
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
  const {loading,error,data} = useQuery(Query_SCRIPTTAGS)
  const [createScripts] = useMutation(CREATE_SCRIPT_TAG)

  if(loading) return <div>loading....</div>
  if(error) return <div>{error.message}</div>
    return (
        <div>
            <button 
            onClick={()=>{
              createScripts({
                variables:{
                  input:{
                    src:"https://shopifyapp01.herokuapp.com/test-script.js",
                    "displayScope": "ALL"
                  }
                }
              })
            }}>

            </button>
            Script Tags List:
            
        </div>
    )
}

export default ScriptPage
