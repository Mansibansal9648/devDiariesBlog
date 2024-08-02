import React from "react";
import "./stats.css";

function Stats() {
  return (
    <div className="container  stats-page position-relative z-0">
      <div className="border border-2 main_stats my-5">
        <div>
          {" "}
          <i class="fa-solid fa-user-group pe-2"></i> 0 followers
        </div>
        <hr />
        <div>
          {" "}
          <i class="fa-regular fa-file-lines pe-2"></i> 0 posts
        </div>
        <hr />
        <div>
          <i class="fa-solid fa-message pe-2"></i> 0 comments
        </div>
      </div>

      <div className="border border-2 main_stats my-5 gap-5">
        <div>
          {" "}
          All Time <span className="px-2">0</span>{" "}
          <i class="fa-solid fa-eye ps-2"></i>
        </div>
        <div>
          {" "}
          Today <span className="px-2">0</span>{" "}
          <i class="fa-solid fa-eye ps-2"></i>
        </div>
        <div>
          {" "}
          Yesterday <span className="px-2">0</span>{" "}
          <i class="fa-solid fa-eye ps-2"></i>
        </div>
        <div>
          {" "}
          This Month <span className="px-2">0</span>{" "}
          <i class="fa-solid fa-eye ps-2"></i>
        </div>
        <div>
          {" "}
          Last Month <span className="px-2">0</span>{" "}
          <i class="fa-solid fa-eye ps-2"></i>
        </div>
      </div>
      <div className="border border-2 main_stats flex-column my-5">
        <img src="https://www.blogger.com/img/no-data-sq-1x.png" alt="" />
        <div>
            <h3>There's no data to show</h3>
            <p>Try again later or select a different time period.</p>
        </div>
      </div>
    </div>
  );
}

export default Stats;
