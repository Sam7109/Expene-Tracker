        // // const form = document.getElementById("expenseForm");

        // // form.addEventListener('submit', function(event) {
        // //     event.preventDefault();
        // //     const moneySpent = document.getElementById("expenseAmount").value;
        // //     const expenseDesc = document.getElementById("expenseDescription").value;
        // //     const expenseCategory = document.getElementById("category").value;

        // //     const formDetails = {
        // //         amount: moneySpent,
        // //         description: expenseDesc,
        // //         category: expenseCategory
        // //     };

        // //     const convertedToJSON = JSON.stringify(formDetails);
        // //     localStorage.setItem('Expense Details', convertedToJSON);
        // //     setDetails(formDetails);
        // // });

        // // // in case if user reloads 
        // // window.onload = function() {
        // //     const storedDetails = localStorage.getItem('Expense Details');
        // //     if (storedDetails) {
        // //         const formDetails = JSON.parse(storedDetails);
        // //         setDetails(formDetails);
        // //     }
        // // };

        // // function setDetails(formDetails) {
        // //     const listParent = document.getElementById("parent-button");
        // //     const createList = document.createElement('li');
        // //     createList.textContent = `Amount Spent : ${formDetails.amount}  , Description : ${formDetails.description},  Category : ${formDetails.category}`;

        // //      //delete button
        // //      const deleteButton = document.createElement('button')
        // //      deleteButton.textContent = 'Delete'
        // //      deleteButton.addEventListener('click',function(){
        // //         listParent.removeChild(createList);

        // //         const storedDetails = JSON.parse(localStorage.getItem('Expense Details'));
        // //         const index = storedDetails.findIndex(item => item.name === formDetails.name && item.phone === formDetails.phone && item.email === formDetails.email);
        // //         if (index !== -1) {
        // //           storedDetails.splice(index, 1);
        // //           localStorage.setItem('Expense Details', JSON.stringify(storedDetails));
        // //         }

        // //      })
        // //      //edit button 
        // //      const editButton = document.createElement('button')
        // //      editButton.textContent('Edit')
        // //      editButton.addEventListener('click',function(){

        // //      })







        //      createList.appendChild(deleteButton)
        //      listParent.appendChild(createList);
        // //creating an edit button
                    
        //     }
        
        // const form = document.getElementById("expenseForm");

        // form.addEventListener('submit', function(event) {
        //     event.preventDefault();
        //     const moneySpent = document.getElementById("expenseAmount").value;
        //     const expenseDesc = document.getElementById("expenseDescription").value;
        //     const expenseCategory = document.getElementById("category").value;
        
        //     const formDetails = {
        //         amount: moneySpent,
        //         description: expenseDesc,
        //         category: expenseCategory
        //     };
        
        //     const convertedToJSON = JSON.stringify(formDetails);
        //     localStorage.setItem('Expense Details', convertedToJSON);
        //     setDetails(formDetails);
        // });
        
        // // in case if user reloads 
        // window.onload = function() {
        //     const storedDetails = localStorage.getItem('Expense Details');
        //     if (storedDetails) {
        //         const formDetails = JSON.parse(storedDetails);
        //         setDetails(formDetails);
        //     }
        // };
        
        // function setDetails(formDetails) {
        //     const listParent = document.getElementById("parent-button");
        //     const createList = document.createElement('li');
        //     createList.textContent = `Amount Spent: ${formDetails.amount}, Description: ${formDetails.description}, Category: ${formDetails.category}`;
        
        //     // Delete button
        //     const deleteButton = document.createElement('button');
        //     deleteButton.textContent = 'Delete';
        //     deleteButton.addEventListener('click', function() {
        //         listParent.removeChild(createList);
        
        //         const storedDetails = JSON.parse(localStorage.getItem('Expense Details'));
        //         const index = storedDetails.findIndex(item => item.amount === formDetails.amount && item.description === formDetails.description && item.category === formDetails.category);
        //         if (index !== -1) {
        //             storedDetails.splice(index, 1);
        //             localStorage.setItem('Expense Details', JSON.stringify(storedDetails));
        //         }
        //     });
        
        //     // Edit button
        //     const editButton = document.createElement('button');
        //     editButton.textContent = 'Edit';
        //     editButton.addEventListener('click', function() {
        //         // Populate form fields with existing details for editing
        //         document.getElementById("expenseAmount").value = formDetails.amount;
        //         document.getElementById("expenseDescription").value = formDetails.description;
        //         document.getElementById("category").value = formDetails.category;
        
        //         // Remove the item from the UI
        //         listParent.removeChild(createList);
        
        //         // Remove the item from localStorage
        //         const storedDetails = JSON.parse(localStorage.getItem('Expense Details'));
        //         const index = storedDetails.findIndex(item => item.amount === formDetails.amount && item.description === formDetails.description && item.category === formDetails.category);
        //         if (index !== -1) {
        //             storedDetails.splice(index, 1);
        //             localStorage.setItem('Expense Details', JSON.stringify(storedDetails));
        //         }
        //     });
        
        //     // Append buttons to the list item
        //     createList.appendChild(deleteButton);
        //     createList.appendChild(editButton);
        
        //     listParent.appendChild(createList);
        // }
        
            

        const form = document.getElementById("expenseForm");

        form.addEventListener('submit', function(event) {
            event.preventDefault();
            const moneySpent = document.getElementById("expenseAmount").value;
            const expenseDesc = document.getElementById("expenseDescription").value;
            const expenseCategory = document.getElementById("category").value;
        
            const formDetails = {
                amount: moneySpent,
                description: expenseDesc,
                category: expenseCategory
            };
        
            const convertedToJSON = JSON.stringify(formDetails);
            localStorage.setItem('Expense Details', convertedToJSON);
            setDetails(formDetails);
        });
        
        // in case if user reloads 
        window.onload = function() {
            const storedDetails = localStorage.getItem('Expense Details');
            if (storedDetails) {
                const formDetails = JSON.parse(storedDetails);
                setDetails(formDetails);
            }
        };
        
        function setDetails(formDetails) {
            const listParent = document.getElementById("parent-button");
            const createList = document.createElement('li');
            createList.textContent = `Amount Spent: ${formDetails.amount}, Description: ${formDetails.description}, Category: ${formDetails.category}`;
        
            // Delete button
            const deleteButton = document.createElement('button');
            deleteButton.textContent = 'Delete';
            deleteButton.style.marginLeft = '5px'; // Add style for spacing
            deleteButton.style.padding = '5px 10px'; // Add style for padding
            deleteButton.style.border = '1px solid #ccc'; // Add style for border
            deleteButton.style.backgroundColor = '#f0f0f0'; // Add style for background color
            deleteButton.style.cursor = 'pointer'; // Add style for cursor
            deleteButton.addEventListener('click', function() {
                listParent.removeChild(createList);
        
                const storedDetails = JSON.parse(localStorage.getItem('Expense Details'));
                const index = storedDetails.findIndex(item => item.amount === formDetails.amount && item.description === formDetails.description && item.category === formDetails.category);
                if (index !== -1) {
                    storedDetails.splice(index, 1);
                    localStorage.setItem('Expense Details', JSON.stringify(storedDetails));
                }
            });
        
            // Edit button
            const editButton = document.createElement('button');
            editButton.textContent = 'Edit';
            editButton.style.marginLeft = '5px'; // Add style for spacing
            editButton.style.padding = '5px 10px'; // Add style for padding
            editButton.style.border = '1px solid #ccc'; // Add style for border
            editButton.style.backgroundColor = '#f0f0f0'; // Add style for background color
            editButton.style.cursor = 'pointer'; // Add style for cursor
            editButton.addEventListener('click', function() {
                // Populate form fields with existing details for editing
                document.getElementById("expenseAmount").value = formDetails.amount;
                document.getElementById("expenseDescription").value = formDetails.description;
                document.getElementById("category").value = formDetails.category;
        
                // Remove the item from the UI
                listParent.removeChild(createList);
        
                // Remove the item from localStorage
                const storedDetails = JSON.parse(localStorage.getItem('Expense Details'));
                const index = storedDetails.findIndex(item => item.amount === formDetails.amount && item.description === formDetails.description && item.category === formDetails.category);
                if (index !== -1) {
                    storedDetails.splice(index, 1);
                    localStorage.setItem('Expense Details', JSON.stringify(storedDetails));
                }
            });
        
            // Append buttons to the list item
            createList.appendChild(deleteButton);
            createList.appendChild(editButton);
        
            listParent.appendChild(createList);
        }
        