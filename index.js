const api = "https://jsonplaceholder.typicode.com";
const main = document.querySelector("#post-container");

// fetch all the posts from api
async function getAllPosts() {
  try {
    const response = await fetch(`${api}/posts/`);
    const posts = await response.json();
    showPosts(posts);
  } catch (err) {
    alert("Error: ", err);
  }
}
// fetch comments of one post
let commentsOfPost = async function fetchComments(postId) {
  try {
    const response = await fetch(`${api}/posts/${postId}/comments`);
    const data = await response.json();
    return data;
  } catch (err) {
    alert("Error: " + err);
  }
};
// retrieve data from comments
function singleComment(arr) {
  let result = "";
  arr.forEach((data) => {
    result += `<div class="my-3">
    <p class="text"><strong>${data.email}</strong></p>
    <p class="text">${data.name}</p>
    <hr>
    </div>`;
  });
  return result;
}

// fetch user associated with post
async function fetchUser(userId) {
  try {
    const response = await fetch(`${api}/users/${userId}`);
    const data = await response.json();
    return data.name;
  } catch (error) {
    console.log(error);
  }
}

// posts rendering
async function showPosts(data) {
  data.forEach(async (element) => {
    const commentsData = await commentsOfPost(element.id);
    const userOfPost = await fetchUser(element.userId);
    let comments = singleComment(commentsData);
    main.innerHTML += `
    <div class="card">
      <div class="body">
      <span class="text username"><strong>From: @${userOfPost}</strong></span> 
        <p class="text my-3">
          <strong>${element.title}</strong>
        </p>
        <p class="text">${element.body}</p>
        <div class="footer">
          <div>
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <g stroke-width="0" id="SVGRepo_bgCarrier"></g>
                <g
                  stroke-linejoin="round"
                  stroke-linecap="round"
                  id="SVGRepo_tracerCarrier"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  <path
                    stroke-linejoin="round"
                    stroke-linecap="round"
                    stroke-width="1.5"
                    d="M16 10H16.01M12 10H12.01M8 10H8.01M3 10C3 4.64706 5.11765 3 12 3C18.8824 3 21 4.64706 21 10C21 15.3529 18.8824 17 12 17C11.6592 17 11.3301 16.996 11.0124 16.9876L7 21V16.4939C4.0328 15.6692 3 13.7383 3 10Z"
                  ></path>
                </g></svg
              >${commentsData.length}
            </div>
          </div>
        </div>
        <div class="comments-container blue-bg">
          <div class="accordion-item">
            <h2 class="accordion-header" id="panelsStayOpen-headingTwo">
              <button
                class="accordion-button collapsed blue-bg"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#panelsStayOpen-${element.id}"
                aria-expanded="false"
                aria-controls="panelsStayOpen-collapseTwo"
              >
                Comments
              </button>
            </h2>
            <div
              id="panelsStayOpen-${element.id}"
              class="accordion-collapse collapse"
              aria-labelledby="panelsStayOpen-headingTwo"
            >
              <div class="accordion-body accordion-text">${comments}</div>
            </div>
          </div>
        </div>
      </div>
  </div>
  `;
  });
}
getAllPosts();
