const footerURL = "../pages/footer.html"; // Replace with the actual path to your footer.html file

function includeFooter() 
{
    // fetch(footerURL)
    fetch(footerURL)
        .then(response => response.text())
        .then(footerHTML => {
            const footerElement = document.createElement("div");
            footerElement.innerHTML = footerHTML;

            const mainContent = document.querySelector("contenido"); // Replace with the selector for your main content area
            if (mainContent) 
            {
                mainContent.parentNode.insertBefore(footerElement, mainContent.nextSibling);
            } 
            else 
            {
                document.body.appendChild(footerElement);
            }
        })
        .catch(error => console.error("Error fetching footer:", error));
}

window.onload = includeFooter; // Execute the includeFooter function on page load