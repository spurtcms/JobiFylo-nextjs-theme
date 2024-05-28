
export const GET_POSTS_SIGN_QUERY = `mutation memberRegister($singData: MemberDetails!,$ecomModule:Int) {
    memberRegister(
      input:$singData,
      ecomModule:$ecomModule
    )
  }
    `;



  export const GET_POSTS_LOGIN_QUERY =`mutation($email:String!,$password:String!){
    templateMemberLogin(
      email:$email
      password:$password
    )
  }`

  export const GET_POST_LIST_QUERY=`query(
    $limit: Int!,
    $offset: Int!,
    $filter: JobFilter
    )
    {
     jobsList(limit:$limit,offset:$offset,filter:$filter){
      
    jobs{
      id
      categoriesId
      category{
        id
        categoryName
        categorySlug
      }
      jobSlug
      jobTitle
      jobDescription
      jobLocation
      jobType
      education
      department
      experience
      salary
      createdOn
      createdBy
      isDeleted
      deletedOn
      deletedBy
      keyword
      skill
      minimumYears
      maximumYears
      postedDate
      validThrough
      status
      modifiedOn
      modifiedBy
    }
      count
    }
    }`


    export const GET_POST_DETAIL_QUERY=`query($jobSlug: String){
      jobDetail(jobSlug:$jobSlug){
        id
      categoriesId
      category{
        id
        categoryName
        categorySlug
      }
      jobTitle
      jobDescription
      jobLocation
      jobType
      education
      department
      experience
      salary
      createdOn
      createdBy
      isDeleted
      deletedOn
      deletedBy
      keyword
      skill
      minimumYears
      maximumYears
      postedDate
      validThrough
      status
      modifiedOn
      modifiedBy
        
      }
    }
    `
    export const GET_POST_CATEGORIES_LIST= `query($hierarchylevel: Int!){
      categoriesList(hierarchyLevel: $hierarchylevel){
        categories{
          id
          categoryName
          categorySlug
          parentId
        }
      }
    }
    `