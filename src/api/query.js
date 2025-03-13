
export const GET_POSTS_SIGN_QUERY = `mutation 
memberRegister($input: MemberDetails!
  $ecomModule: Int){
    memberRegister(input:$input,ecomModule:$ecomModule)
  }
    `;
export const GET_REGISTER_QUERY = `mutation
    memberRegister(
  $input: MemberDetails!
  $arguments: MemberArguments
    ){
      memberRegister(input:$input,
      arguments:$arguments)
    }`;



export const GET_POSTS_LOGIN_QUERY = `mutation 
  templateMemberlogin($username: String, $email: String, 
    $password: String!,$Module: Int) 
    {
    templateMemberLogin(usern{console.log(audio_files_Array?.[0]?.coverImage, "cbjjjjjbffb")}
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

export const GET_VIEW_DETAIL_QUERY = `query ChannelEntryDetail(
$id: Int
$slug: String
$AdditionalData: EntriesAdditionalData
  $channelId:Int
){
  ChannelEntryDetail(id:$id,slug:$slug,
    AdditionalData:$AdditionalData,channelId:$channelId){
    id
    ctaLink
    title
    slug
    description
    userId
    channelId
    status
    isActive
    createdOn
    createdBy
    modifiedBy
    modifiedOn
    coverImage
    thumbnailImage
    metaTitle
    metaDescription
    keyword
    categoriesId
    relatedArticles
    featuredEntry
    viewCount
    author
    sortOrder
    createTime
    publishedTime
    readingTime
    tags
    excerpt
    imageAltTag
    categories{
        id
        categoryName
        categorySlug
        description
        imagePath
        createdOn
        createdBy
        modifiedOn
        modifiedBy
        parentId
        tenantId
      }
      additionalFields{
        sections{
          id
          sectionName
          sectionTypeId
          createdOn
          createdBy
          modifiedOn
          modifiedBY
          orderIndex
          tenantId
        }
        fields{
          id
          fieldName
          fieldTypeId
          mandatoryField
          optionExist
          createdOn
          createdBy
          modifiedOn
          modifiedBY
          fieldDesc
          orderIndex
          imagePath
          datetimeFormat
          timeFormat
          sectionParentId
          characterAllowed
          fieldTypeName
          fieldValue{
            id
            fieldValue
            createdOn
            createdBy
            modifiedOn
            modifiedBY
            tenantId
          }
          fieldOptions{
            id
            optionName
            optionValue
            createdOn
            createdOn
            createdBy
            modifiedOn
            modifiedBY
            tenantId
          }
          tenantId 
        }
      }
      authorDetails{
        id
        firstName
        lastName
        email
        mobileNo
        isActive
        profileImagePath
        createdOn
        createdBy
        modifiedOn
        modifiedBy
        tenantId
      }
      memberProfile{
        id
        memberId
        profileName
        profileSlug
        profilePage
        memberDetails
        companyName
        companyLocation
        companyLogo
        about
        seoTitle
        seoKeyword
        seoDescription
        linkedin
        twitter
        website
        createdBy
        createdOn
        modifiedOn
        modifiedBy
        claimStatus
        IsActive
        tenantId
        claimDate
      }
    tenantId
    contentChunk{
      data
      length
    }
  }
} `

export const GET_POST_DETAIL_QUERY = `query($jobSlug: String){
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
export const GET_POST_CATEGORIES_LIST = `query($hierarchylevel: Int!,$categoryGroupId: Int){
      categoriesList(hierarchyLevel: $hierarchylevel,categoryGroupId:$categoryGroupId){
        categories{
          id
          categoryName
          categorySlug
          parentId
        }
      }
    }
    `
export const GET_POST_CATEGORY_NAME = `query
  CategoryList(
$categoryFilter: CategoryFilter
$commonFilter: Filter
  ){
    CategoryList(categoryFilter:$categoryFilter,
      commonFilter:$commonFilter){
        categorylist{
          id
          categoryName
          categorySlug
          description
          tenantId
        }
      }
    }`

export const GET_POST_JOB_APPLY_LIST_QUERY = `
    query applicantDetails ($jobId: Int!
      $emailId: String!){
        applicantDetails(jobId:$jobId,emailId:$emailId){
          id
          name
          emailId
          mobileNo
          jobType
          gender
          location
          education
          graduation
          companyName
          experience
          skills
          imagePath
          image
          createdOn
          createdBy
          modifiedOn
          modifiedBy
          isDeleted
          deletedOn
          deletedBy
          currentSalary
          expectedSalary
          status
          resumePath
          resumeName
          storageType
        }
      }
    `

export const GET_JOB_LIST_QUERY = `query
  ChannelEntriesList(
$commonFilter: Filter
$sort: Sort
$entryFilter: EntriesFilter
$AdditionalData: EntriesAdditionalData
  ){
    ChannelEntriesList(commonFilter:$commonFilter,
      sort:$sort,
      entryFilter:$entryFilter,
      AdditionalData:$AdditionalData)
    {
      channelEntriesList{
        id
        title
        slug
        tenantId
        description
        userId
        channelId
        status
        isActive
        createdOn
        createdBy
        modifiedBy
        modifiedOn
        coverImage
        thumbnailImage
        metaTitle
        metaDescription
        keyword
        categoriesId
        relatedArticles
        featuredEntry
        viewCount
        author
        sortOrder
        createTime
        publishedTime
        readingTime
        tags
        excerpt
        imageAltTag
        categories{
          id
          categoryName
          categorySlug
          description
          createdOn
          createdBy
          modifiedOn
          parentId
          tenantId
        }
        additionalFields{
          sections{
            id
            sectionName
            sectionTypeId
            createdOn
            createdBy
            modifiedOn
            modifiedBY
            orderIndex
            tenantId
            __typename
          } 
          fields{
            id
            fieldName
              fieldValue{
            fieldValue
            id
          }
            fieldTypeId
            mandatoryField
            optionExist
            createdOn
            createdBy
            modifiedOn
            modifiedBY
          } 
        }
        authorDetails{
          id
          firstName
          lastName
          email
          profileImagePath
          createdOn
          createdBy
          modifiedOn
          modifiedBy
        }
        
      }
    }
  }`

export const GET_SIGNIN_QUERY = `mutation
  memberCheckLogin($input: MemberSignin!){
    memberCheckLogin(input:$input){
      email
      password
      message
      token
      success
    }
  }
`;

export const GET_HEADER_FORGOT_PASSWORD_QUERY = `mutation 
forgotPassword($input: MemberInfo!){
  forgotPassword(input:$input){
    message
  }
}`;


export const GET_RESET_NEW_PASSWORD = `mutation 
resetPassword($input: MemberResetpassInfo!){
  resetPassword(input:$input)
}
`
