import { useState } from "react"
import JobCard from "../components/JobCard";


export const FindJobs = () => {
    const [jobs, setJobs] = useState([]);
    const [jobTitle, setJobTitle] = useState("");
    const [location, setLocation] = useState("");
    const [loading, setLoading] = (true);

    const fetchData = async () => {
        try {
            setLoading(true)
            if (jobTitle === "" || location === "") {
                alert("Please enter your search criteria");
            }
            setJobs([])
            const data = await fetch(`https://api.adzuna.com/v1/api/jobs/gb/search/1?app_id=14758e80&app_key=b7bdf1e68baa9af01ec4a64dbfe8d2b3&where=${location}&what=${jobTitle}&results_per_page=18`
            )
            if (response.status !== 200) {
                throw new Error("The server is down, try again later!")
            }
            const response = await data.json();    
            setJobs(data.results)
            setLoading(false)
        } catch (error) {
            console.log(error)
        }
    };


    return (
        <>
            <div className="search-area">
                <input 
                    type="text"
                    placeholder="Search a job-title..."
                    value={jobTitle}
                    onChange={(e) => setJobTitle(e.target.value)}
                />
                <input 
                    type="text"
                    placeholder="Search location..."
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                />
                <button onClick={fetchData}>Search</button>
            </div>
            <div className="job-area">
                {!loading && jobs.length === 0 && <h2>No Jobs Found</h2>}

                {loading ? <h2>Loading...</h2> : <div> {jobs.map((job, i) => (
                    <JobCard key={i} job={job} />
                    ))}
                </div>}
            </div>
        </>
    )
}