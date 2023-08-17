function DateFormatter(){
   const formatDate =(date, format) =>{
        const options = {
          year: 'numeric',
          month: 'long',
          day: 'numeric',
        //   hour: '2-digit',
        //   minute: '2-digit',
        //   second: '2-digit',
         // timeZoneName: 'short'
        };
      
        return date.toLocaleDateString(undefined, options);
      }
      return {
        formatDate,
      }
}
export default DateFormatter;