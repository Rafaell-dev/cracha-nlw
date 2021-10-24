const linksSocialMedia = {
        github: "rafaell-dev",
        youtube: "",
        facebook: "",
        instagram: "rafaelldev",
        twitter: "rafaelldev"
      }
      function changeSocialMediaLinks(){
        
        for(let li of socialLinks.children){
          const social = li.getAttribute('class')
          
          li.children[0].href = `https://${social}.com/${linksSocialMedia[social]}`
        }
    
      }
      changeSocialMediaLinks()

      function getGitHubProfileInfos(){
        const url = `https://api.github.com/users/${linksSocialMedia.github}`

        fetch(url)
        .then(Response => Response.json())
        .then(data => {
          userName.textContent = data.name
          userBio.textContent = data.bio
          userLink.href = data.html_url
          userImg.src = data.avatar_url
          userLogin.textContent = data.login
        })
      }
      getGitHubProfileInfos()