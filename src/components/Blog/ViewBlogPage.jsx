import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

function ViewBlogPage() {
  const params = useParams();
  const { AllblogData } = useSelector((state) => state.blog);
  const [data, setData] = useState(null);

  // console.log(params)

  function getData() {
    if (AllblogData) {
      const response = AllblogData.filter((data) => data.id === params.id);
      console.log(response)
      setData(response[0]);
    }
  }

  useEffect(() => {
    getData();
  }, []);

  return <div className="py-15 px-10">

	</div>;	
	
	
	

	
	
	
}

export default ViewBlogPage;
