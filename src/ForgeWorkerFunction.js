function convertDate( date ) {
  let d = '';
  if (date.length === 8) {
    d = date.substring( 0, 4 );
    d += '-';
    d += date.substring( 4, 6 );
    d += '-';
    d += date.substring( 6, 8 );
  }
  return d;
}

export default function filterDb( m, attributeName, attributeVal ) {
  const date = attributeVal.getTime()
  const fun = `
function userFunction( pdb ) {
  const res = [];
  let attrNameId = -1;
  
  function convertDate( date ) {
    let d = "";
    if (date.length === 8) {
      d = date.substring( 0, 4 );
      d += "-";
      d += date.substring( 4, 6 )
      d += "-";
      d += date.substring( 6, 8 )
    }
    return d;
  }
  
  pdb.enumAttributes( ( i, attrDef, attrRaw ) => {
    const { name } = attrDef;
    
    if (name.toLowerCase() === '${attributeName.toLowerCase()}') {
      attrNameId = i;
      return true;
    }
  } );
  
  pdb.enumObjects( ( dbId ) => {
    pdb.enumObjectProperties( dbId, ( attrId, valId ) => {
      if (attrId === attrNameId) {
        const value = pdb.getAttrValue( attrId, valId );
        if (value.length > 0) {
          let data = new Date(convertDate( value )).getTime()
          

          if (value.length > 0 && data < '${date}') {
            res.push( dbId );
          }
        }
        return true;
        
      }
    } );
  } );
  
  return { dbIds: res, attrId: attrNameId };
}`;
  
  return m.getPropertyDb().executeUserFunction( fun );
}
