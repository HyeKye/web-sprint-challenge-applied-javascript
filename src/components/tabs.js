import { text } from "express"
import axios from 'axios'

const Tabs = (topics) => {
const topicWrapper = document.createElement('div')
topicWrapper.classList.add('topics')


topics.forEach(topic => {
  let tab = document.createElement('div')
  tab.classList.add('tab')
  tab.textContent = topic
  topicWrapper.append(tab)
})

return topicWrapper;
}

  // TASK 3
  // ---------------------
  // Implement this function which takes an array of strings ("topics") as its only argument.
  // As an example, if the topics passed are ['javascript', 'bootstrap', 'technology']
  // then the function returns the markup below.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  //
  // <div class="topics">
  //   <div class="tab">javascript</div>
  //   <div class="tab">bootstrap</div>
  //   <div class="tab">technology</div>
  // </div>
  //



const tabsAppender = (selector) => {
  axios.get(`http://localhost:5001/api/topics`)
  .then(res => {
    const topics = res.data.topics
    console.log(res.data.topics)
    const element = document.querySelector(selector)
    element.append(Tabs(topics))
})
.catch(err => console.log('Error: ', err))
}

  // TASK 4
  // ---------------------
  // Implement this function which takes a css selector as its only argument.
  // It should obtain topics from this endpoint: `http://localhost:5001/api/topics` (test it with a console.log!).
  // Find the array of topics inside the response, and create the tabs using the Tabs component.
  // Append the tabs to the element in the DOM that matches the selector passed to the function.
  //

export { Tabs, tabsAppender }
