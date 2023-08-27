const tabData = [
    {
      title: "Tab 1",
      content: "Content for Tab 1. This is some information about the first tab. Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo error ex consequuntur excepturi voluptatibus corrupti deleniti sed autem animi quis enim, sint laborum, vitae voluptatum voluptates, assumenda ipsam. Nesciunt cum dicta commodi."
    },
    {
      title: "Tab 2",
      content: "Content for Tab 2. Here's the content for the second tab. Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo error ex consequuntur excepturi voluptatibus corrupti deleniti sed autem animi quis enim, sint laborum, vitae voluptatum voluptates, assumenda ipsam. Nesciunt cum dicta commodi. A maiores debitis perferendis reprehenderit earum. Eligendi voluptate nulla architecto numquam et maxime ab accusantium earum! Nihil, cum!"
    },
    {
      title: "Tab 3",
      content: "Content for Tab 3. This is the content of the third tab. Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo error ex consequuntur excepturi voluptatibus corrupti deleniti sed autem animi quis enim, sint laborum, vitae voluptatum voluptates, assumenda ipsam. Nesciunt cum dicta commodi."
    }
  ];

  const container = document.querySelector('.tab-container');
  const tabHeader = document.querySelector('.tab-header');
  const tabContent = document.querySelector('.tab-content');
  console.log(tabHeader)

  tabData.forEach((item, index) => {
    const headItem = document.createElement('div');
    headItem.classList.add('head-item');
    headItem.innerText = item.title;
    tabHeader.appendChild(headItem)
    // dom for tab comtent
    const content = document.createElement('div');
    content.classList.add('content');
    content.innerHTML = item.content;
    tabContent.appendChild(content)
  })

  const tabHead = document.querySelectorAll('.head-item')
  const allContent = document.querySelectorAll(".content")

    tabHead[0].classList.add('active');
    allContent.forEach(item => item.style.display = 'none')
    allContent[0].style.display = 'block';

  tabHead.forEach((item, index) => {
      item.addEventListener('click',() => {
          tabHead.forEach(item => item.classList.remove('active'))
          item.classList.add('active')
          allContent.forEach(item => item.style.display = 'none')
        allContent[index].style.display = 'block'
    })
  })