let url = 'https://jsonplaceholder.typicode.com/todos';
      // fetch url and fabricate fetch train
      fetch(url).then(res.json()).then(
      // expand 3 wagon and iterate the date
      data => {
         let i = 0;
         while (i < data.length) {

            if (data[i].completed) {
               document.getElementById('todo').innerHTML += `<strike>${data[i].title}</strike><hr>`
            } 

            else {
               document.getElementById('todo').innerHTML += `${data[i].title}<hr>`
            }

            i++;
      }


      ).catch((error) => {}
      // expand 3 wagon and iterate the date
      //asign data with append and use of a teplate literal
      // make if clause to show date without and with strikethrough
