
import {gql} from '@apollo/client';


export const LOAD_PRODUCTS = gql`
query{

    category{
      name,
      products{
        id,
        name,
        gallery,
        prices{
          currency{
            label,
            symbol},
          amount
        }
      }
    }
      }
    
`