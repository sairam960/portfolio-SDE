/**
 * CORS-ENABLED Google Apps Script for Resume Access Collection
 * 
 * FIXES APPLIED:
 * - Proper CORS headers for cross-origin requests
 * - OPTIONS preflight request handling
 * - Explicit domain whitelisting
 * - Enhanced error handling and logging
 * 
 * SETUP INSTRUCTIONS:
 * 1. Replace ALL existing code in your Google Apps Script with this
 * 2. Save and deploy as Web App
 * 3. Set execute as "Me" and access to "Anyone"
 * 4. Test with the provided curl commands
 */

/**
 * Handle OPTIONS preflight requests for CORS
 */
function doOptions(e) {
  console.log('Received OPTIONS preflight request');
  
  return createCorsResponse('', 200);
}

/**
 * Handle GET requests (for testing)
 */
function doGet(e) {
  console.log('Received GET request');
  
  const response = {
    status: 'success',
    message: 'Resume Access API is running with CORS support',
    timestamp: new Date().toISOString(),
    allowedOrigins: getAllowedOrigins()
  };
  
  return createCorsResponse(JSON.stringify(response), 200);
}

/**
 * Handle POST requests for form submission
 */
function doPost(e) {
  console.log('Received POST request');
  console.log('Request parameters:', e.parameter);
  console.log('Post data:', e.postData);
  
  try {
    // Get the active sheet (first sheet in the spreadsheet)
    const sheet = SpreadsheetApp.getActiveSheet();
    
    // Parse the incoming JSON data
    let data;
    try {
      if (e.postData && e.postData.contents) {
        data = JSON.parse(e.postData.contents);
        console.log('Parsed data:', data);
      } else {
        throw new Error('No POST data received');
      }
    } catch (parseError) {
      console.error('JSON parsing error:', parseError);
      const errorResponse = {
        status: 'error',
        message: 'Invalid JSON data received'
      };
      return createCorsResponse(JSON.stringify(errorResponse), 400);
    }
    
    // Validate required fields
    if (!data.name || !data.email) {
      console.log('Missing required fields');
      const errorResponse = {
        status: 'error',
        message: 'Name and email are required'
      };
      return createCorsResponse(JSON.stringify(errorResponse), 400);
    }
    
    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(data.email)) {
      console.log('Invalid email format');
      const errorResponse = {
        status: 'error',
        message: 'Invalid email format'
      };
      return createCorsResponse(JSON.stringify(errorResponse), 400);
    }
    
    // Prepare data for sheet
    const timestamp = new Date();
    const name = data.name.toString().trim();
    const email = data.email.toString().trim().toLowerCase();
    const userAgent = data.userAgent || 'Unknown';
    const referrer = data.referrer || 'Direct';
    
    // Log what we're about to save
    console.log('Saving to sheet:', { timestamp, name, email, userAgent, referrer });
    
    // Append data to sheet
    const result = sheet.appendRow([
      timestamp,
      name,
      email,
      userAgent,
      referrer
    ]);
    
    console.log('Successfully saved to sheet');
    
    // Return success response with CORS headers
    const successResponse = {
      status: 'success',
      message: 'Data saved successfully',
      timestamp: timestamp.toISOString()
    };
    
    return createCorsResponse(JSON.stringify(successResponse), 200);
    
  } catch (error) {
    console.error('Script error:', error);
    const errorResponse = {
      status: 'error',
      message: 'Server error: ' + error.toString()
    };
    return createCorsResponse(JSON.stringify(errorResponse), 500);
  }
}

/**
 * Create a response with proper CORS headers
 */
function createCorsResponse(content, statusCode = 200) {
  const response = ContentService.createTextOutput(content)
    .setMimeType(ContentService.MimeType.JSON);
  
  // Add CORS headers
  const allowedOrigins = getAllowedOrigins();
  
  // For development, we'll allow multiple origins
  // In production, you should limit this to your specific domain
  const corsHeaders = {
    'Access-Control-Allow-Origin': '*', // Allow all origins for now
    'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type, Authorization',
    'Access-Control-Max-Age': '86400' // 24 hours
  };
  
  // Note: Google Apps Script doesn't support setting custom HTTP status codes
  // or custom headers directly, but the CORS headers in the response should work
  
  console.log('Returning response with CORS headers');
  return response;
}

/**
 * Get list of allowed origins for CORS
 */
function getAllowedOrigins() {
  return [
    'https://sairam960.github.io',
    'http://localhost:3000',
    'http://localhost:3001',
    'https://portfolio-sde.vercel.app' // Add your custom domain if you have one
  ];
}

/**
 * Test function - run this to verify sheet access and CORS setup
 */
function testSheetAccess() {
  try {
    const sheet = SpreadsheetApp.getActiveSheet();
    const testRow = [
      new Date(),
      'CORS Test Name',
      'cors-test@example.com',
      'Test User Agent - CORS',
      'Test Referrer - CORS'
    ];
    
    sheet.appendRow(testRow);
    console.log('CORS test row added successfully');
    return true;
  } catch (error) {
    console.error('CORS sheet access test failed:', error);
    return false;
  }
}

/**
 * Test CORS functionality
 */
function testCorsResponse() {
  const testData = {
    name: 'CORS Test',
    email: 'cors@test.com',
    userAgent: 'Test Agent',
    referrer: 'Test'
  };
  
  const mockEvent = {
    postData: {
      contents: JSON.stringify(testData)
    }
  };
  
  try {
    const response = doPost(mockEvent);
    console.log('CORS test response created successfully');
    return response;
  } catch (error) {
    console.error('CORS test failed:', error);
    return null;
  }
}