import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';


const reviewsDirectory = path.join(process.cwd(), '_reviews')

const getSortedReviewsData = () => {
    // get file names under /_reviews
    const fileNames = fs.readdirSync(reviewsDirectory)

    const allReviewsData = fileNames.map(fileName => {
        //remove ".md from file name to get id"
        const id = fileName.replace(/\.md$/, "")

        //read markdown file as string
        const fullPath = path.join(reviewsDirectory, fileName)
        const fileContents = fs.readFileSync(fullPath, 'utf8')


        //use gray-matter to parse the post metadata section
        const matterResult = matter(fileContents)
        
        //combine the data with the id
        
        return {
            id, 
            ...matterResult.data
        }
    })
    // return allReviewsData
    
    // sort posts by date
    
    return allReviewsData.sort(({ date: a }, { date: b }) => {
        if (a < b) {
            return 1
        } else if (a > b ) {
            return -1
        } else {
            return 0
        }
    })
}

    


export { getSortedReviewsData };

